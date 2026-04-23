import { z } from "zod";

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
