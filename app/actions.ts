"use server";

import { leadSchema } from "@/lib/lead-schema";
import { getSupabaseServerClient } from "@/lib/supabase";
import type { LeadFormState } from "@/lib/types";
import { normalizeEmail, normalizePhone } from "@/lib/utils";

const defaultErrorMessage =
  "Le formulaire est prêt, mais la connexion Supabase n'est pas encore configurée.";

function getString(formData: FormData, key: string) {
  return String(formData.get(key) || "");
}

export async function submitLeadForm(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const website = getString(formData, "website");

  if (website) {
    return {
      success: true,
      message: "Merci, votre demande a bien été reçue."
    };
  }

  const parsed = leadSchema.safeParse({
    first_name: getString(formData, "first_name"),
    last_name: getString(formData, "last_name"),
    email: getString(formData, "email"),
    phone: getString(formData, "phone"),
    customer_type: getString(formData, "customer_type"),
    service_type: getString(formData, "service_type"),
    location: getString(formData, "location"),
    surface: getString(formData, "surface"),
    frequency: getString(formData, "frequency"),
    message: getString(formData, "message"),
    consent: formData.get("consent") === "on",
    website
  });

  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      message: "Merci de corriger les champs signalés.",
      fieldErrors: {
        first_name: flattened.first_name?.[0],
        last_name: flattened.last_name?.[0],
        email: flattened.email?.[0],
        phone: flattened.phone?.[0],
        customer_type: flattened.customer_type?.[0],
        service_type: flattened.service_type?.[0],
        location: flattened.location?.[0],
        surface: flattened.surface?.[0],
        frequency: flattened.frequency?.[0],
        message: flattened.message?.[0],
        consent: flattened.consent?.[0]
      }
    };
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return {
      success: false,
      message: defaultErrorMessage
    };
  }

  const payload = {
    ...parsed.data,
    email: normalizeEmail(parsed.data.email),
    phone: normalizePhone(parsed.data.phone),
    status: "nouveau"
  };

  const { error } = await supabase.from("leads").insert(payload);

  if (error) {
    return {
      success: false,
      message:
        "Une erreur est survenue pendant l'envoi. Merci de nous appeler ou de réessayer."
    };
  }

  return {
    success: true,
    message:
      "Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement."
  };
}
