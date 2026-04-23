import { NextResponse } from "next/server";

import { getSupabaseAdminClient, getSupabaseServerClient } from "@/lib/supabase";
import { normalizePhone } from "@/lib/utils";

type ContactPayload = {
  full_name?: unknown;
  phone?: unknown;
  message?: unknown;
};

const supabaseTimeoutMs = 8000;

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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

    const fullName = cleanString(payload.full_name);
    const phone = normalizePhone(cleanString(payload.phone));
    const message = cleanString(payload.message);

    if (!fullName || !phone) {
      const fieldErrors: Record<string, string> = {};

      if (!fullName) {
        fieldErrors.full_name = "Le nom est requis.";
      }

      if (!phone) {
        fieldErrors.phone = "Le téléphone est requis.";
      }

      return NextResponse.json(
        {
          success: false,
          message: "Merci de renseigner votre nom et votre téléphone.",
          fieldErrors
        },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdminClient() ?? getSupabaseServerClient();

    if (!supabase) {
      console.error("[contacts] Configuration Supabase manquante.");

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
      nom: fullName,
      email: "non-renseigne@lilicleanservice.local",
      telephone: phone,
      message
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
