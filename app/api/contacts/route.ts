import { NextResponse } from "next/server";

import {
  getSupabaseAdminClient,
  getSupabaseConfigStatus,
  getSupabaseServerClient
} from "@/lib/supabase";
import { normalizePhone } from "@/lib/utils";

type ContactPayload = {
  first_name?: unknown;
  last_name?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  surface?: unknown;
  message?: unknown;
};

const supabaseTimeoutMs = 8000;

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toPositiveNumber(value: string) {
  const normalizedValue = value.replace(",", ".");
  const numberValue = Number(normalizedValue);

  return Number.isFinite(numberValue) && numberValue > 0 ? numberValue : null;
}

function shouldTryLegacyContactsSchema(message: string) {
  return (
    message.includes("Could not find") ||
    message.includes("schema cache") ||
    message.includes("column")
  );
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return Promise.race([
    promise.finally(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }),
    new Promise<T>((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new Error("Timeout Supabase"));
      }, timeoutMs);
    })
  ]);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    console.log("[contacts] Donnees recues :", JSON.stringify(payload));

    const firstName = cleanString(payload.first_name);
    const lastName = cleanString(payload.last_name);
    const email = cleanString(payload.email).toLowerCase();
    const phone = normalizePhone(cleanString(payload.phone));
    const address = cleanString(payload.address);
    const rawSurface = cleanString(payload.surface);
    const surface = toPositiveNumber(rawSurface);
    const message = cleanString(payload.message);
    const fieldErrors: Record<string, string> = {};

    if (!firstName) {
      fieldErrors.first_name = "Le prénom est requis.";
    }

    if (!lastName) {
      fieldErrors.last_name = "Le nom est requis.";
    }

    if (!email) {
      fieldErrors.email = "L'adresse email est requise.";
    } else if (!isValidEmail(email)) {
      fieldErrors.email = "L'adresse email n'est pas valide.";
    }

    if (!phone) {
      fieldErrors.phone = "Le téléphone est requis.";
    }

    if (!address) {
      fieldErrors.address = "L'adresse postale est requise.";
    }

    if (!rawSurface) {
      fieldErrors.surface = "La surface est requise.";
    } else if (!surface) {
      fieldErrors.surface = "La surface doit être un nombre supérieur à 0.";
    }

    if (!message) {
      fieldErrors.message = "Votre besoin est requis.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Merci de corriger les champs indiqués.",
          fieldErrors
        },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdminClient() ?? getSupabaseServerClient();

    if (!supabase) {
      console.error(
        "[contacts] Configuration Supabase manquante :",
        JSON.stringify(getSupabaseConfigStatus())
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "La configuration Supabase est manquante. Merci de vérifier les variables d'environnement."
        },
        { status: 500 }
      );
    }

    const supabaseClient = supabase;
    const contact = {
      prenom: firstName,
      nom: lastName,
      email,
      telephone: phone,
      adresse: address,
      surface,
      besoin: message
    };

    console.log("[contacts] Insertion Supabase :", JSON.stringify(contact));

    async function insertContact() {
      return supabaseClient
        .from("contacts")
        .insert(contact)
        .select("id, created_at")
        .single();
    }

    let { data, error } = await withTimeout(insertContact(), supabaseTimeoutMs);

    if (error && shouldTryLegacyContactsSchema(error.message)) {
      const legacyContact = {
        nom: `${firstName} ${lastName}`.trim(),
        email,
        telephone: phone,
        message: [
          `Adresse postale : ${address}`,
          `Surface : ${surface} m²`,
          "",
          "Besoin :",
          message
        ].join("\n")
      };

      console.log(
        "[contacts] Schema contacts legacy detecte, nouvel essai :",
        JSON.stringify(legacyContact)
      );

      async function insertLegacyContact() {
        return supabaseClient
          .from("contacts")
          .insert(legacyContact)
          .select("id, created_at")
          .single();
      }

      const legacyResult = await withTimeout(
        insertLegacyContact(),
        supabaseTimeoutMs
      );

      data = legacyResult.data;
      error = legacyResult.error;
    }

    if (error) {
      console.error("[contacts] Erreur Supabase :", JSON.stringify(error));

      return NextResponse.json(
        {
          success: false,
          message:
            "Une erreur est survenue pendant l'envoi. Merci de réessayer dans un instant.",
          details: error.message
        },
        { status: 500 }
      );
    }

    console.log("[contacts] Contact enregistre :", data);

    return NextResponse.json(
      {
        success: true,
        message: "Merci pour votre demande. Nous vous recontactons rapidement.",
        contact: data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contacts] Echec de la requete :", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur est survenue. Merci de réessayer dans un instant."
      },
      { status: 500 }
    );
  }
}
