import { NextResponse } from "next/server";

import {
  getSupabaseAdminClient,
  getSupabaseServerClient
} from "@/lib/supabase";
import { normalizePhone } from "@/lib/utils";

type ContactPayload = {
  prenom?: unknown;
  nom?: unknown;
  email?: unknown;
  telephone?: unknown;
  adresse?: unknown;
  surface?: unknown;
  besoin?: unknown;
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

  return Number.isInteger(numberValue) && numberValue > 0 ? numberValue : null;
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

    const prenom = cleanString(payload.prenom);
    const nom = cleanString(payload.nom);
    const email = cleanString(payload.email).toLowerCase();
    const telephone = normalizePhone(cleanString(payload.telephone));
    const adresse = cleanString(payload.adresse);
    const rawSurface = cleanString(payload.surface);
    const surface = toPositiveNumber(rawSurface);
    const besoin = cleanString(payload.besoin);
    const fieldErrors: Record<string, string> = {};

    if (!prenom) {
      fieldErrors.prenom = "Le prénom est requis.";
    }

    if (!nom) {
      fieldErrors.nom = "Le nom est requis.";
    }

    if (!email) {
      fieldErrors.email = "L'adresse email est requise.";
    } else if (!isValidEmail(email)) {
      fieldErrors.email = "L'adresse email n'est pas valide.";
    }

    if (!telephone) {
      fieldErrors.telephone = "Le téléphone est requis.";
    }

    if (!adresse) {
      fieldErrors.adresse = "L'adresse postale est requise.";
    }

    if (!rawSurface) {
      fieldErrors.surface = "La surface est requise.";
    } else if (!surface) {
      fieldErrors.surface = "La surface doit être un nombre supérieur à 0.";
    }

    if (!besoin) {
      fieldErrors.besoin = "Votre besoin est requis.";
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
      console.error("[contacts] Client Supabase indisponible.");

      return NextResponse.json(
        {
          success: false,
          message: "Une erreur serveur est survenue. Merci de réessayer dans un instant."
        },
        { status: 500 }
      );
    }

    const supabaseClient = supabase;
    const contact = {
      prenom,
      nom,
      email,
      telephone,
      adresse,
      surface,
      besoin
    };

    console.log("[contacts] Insertion Supabase :", JSON.stringify(contact));

    async function insertContact() {
      return supabaseClient
        .from("contacts")
        .insert(contact)
        .select("id, created_at")
        .single();
    }

    const { data, error } = await withTimeout(insertContact(), supabaseTimeoutMs);

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
