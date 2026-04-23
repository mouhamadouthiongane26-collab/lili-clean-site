import { z } from "zod";

import { normalizeEmail, normalizePhone } from "@/lib/utils";

export const leadSchema = z.object({
  first_name: z.string().trim().min(2, "Le prénom est requis."),
  last_name: z.string().trim().min(2, "Le nom est requis."),
  email: z.string().trim().email("Merci de renseigner un e-mail valide."),
  phone: z.string().trim().min(8, "Le téléphone est requis."),
  customer_type: z.string().trim().min(1, "Sélectionnez un type de client."),
  service_type: z.string().trim().min(1, "Choisissez une prestation."),
  location: z.string().trim().min(2, "Précisez votre ville ou zone."),
  surface: z.string().trim().min(1, "Indiquez une surface approximative."),
  frequency: z.string().trim().min(1, "Sélectionnez une fréquence."),
  message: z.string().trim().min(10, "Décrivez brièvement votre besoin."),
  consent: z
    .boolean()
    .refine((value) => value, "Le consentement est requis pour envoyer votre demande."),
  website: z.string().optional()
});

export type LeadFormValues = z.infer<typeof leadSchema>;

export function getLeadFieldErrors(error: z.ZodError<LeadFormValues>) {
  const flattened = error.flatten().fieldErrors;

  return {
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
  };
}

export function buildContactInsert(values: LeadFormValues) {
  const nom = `${values.first_name.trim()} ${values.last_name.trim()}`.trim();
  const messageParts = [
    `Type de client : ${values.customer_type}`,
    `Prestation : ${values.service_type}`,
    `Ville ou zone : ${values.location}`,
    `Surface approximative : ${values.surface}`,
    `Fréquence souhaitée : ${values.frequency}`,
    "",
    values.message.trim()
  ];

  return {
    nom,
    email: normalizeEmail(values.email),
    telephone: normalizePhone(values.phone),
    message: messageParts.join("\n")
  };
}
