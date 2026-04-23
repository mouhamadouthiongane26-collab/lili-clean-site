import { NextResponse } from "next/server";

import { buildContactInsert, getLeadFieldErrors, leadSchema } from "@/lib/lead-schema";
import { getSupabaseServerClient } from "@/lib/supabase";
import type { LeadFormInput, LeadFormState } from "@/lib/types";

const defaultErrorMessage =
  "Le formulaire est prêt, mais la connexion Supabase n'est pas encore configurée.";

function getString(payload: Partial<LeadFormInput>, key: keyof LeadFormInput | "website") {
  return String(payload[key] || "");
}

export async function POST(request: Request) {
  let payload: Partial<LeadFormInput>;

  try {
    payload = (await request.json()) as Partial<LeadFormInput>;
  } catch {
    return NextResponse.json<LeadFormState>(
      {
        success: false,
        message: "La demande n'a pas pu être lue. Merci de réessayer."
      },
      { status: 400 }
    );
  }

  const website = getString(payload, "website");

  if (website) {
    return NextResponse.json<LeadFormState>({
      success: true,
      message: "Demande envoyée avec succès"
    });
  }

  const parsed = leadSchema.safeParse({
    first_name: getString(payload, "first_name"),
    last_name: getString(payload, "last_name"),
    email: getString(payload, "email"),
    phone: getString(payload, "phone"),
    customer_type: getString(payload, "customer_type"),
    service_type: getString(payload, "service_type"),
    location: getString(payload, "location"),
    surface: getString(payload, "surface"),
    frequency: getString(payload, "frequency"),
    message: getString(payload, "message"),
    consent: payload.consent === true,
    website
  });

  if (!parsed.success) {
    return NextResponse.json<LeadFormState>(
      {
        success: false,
        message: "Merci de corriger les champs signalés.",
        fieldErrors: getLeadFieldErrors(parsed.error)
      },
      { status: 400 }
    );
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json<LeadFormState>(
      {
        success: false,
        message: defaultErrorMessage
      },
      { status: 500 }
    );
  }

  const { error } = await supabase.from("contacts").insert(buildContactInsert(parsed.data));

  if (error) {
    return NextResponse.json<LeadFormState>(
      {
        success: false,
        message: "Une erreur est survenue pendant l'envoi. Merci de réessayer."
      },
      { status: 500 }
    );
  }

  return NextResponse.json<LeadFormState>({
    success: true,
    message: "Demande envoyée avec succès"
  });
}
