"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { services } from "@/lib/data";
import type { LeadFormInput, LeadFormState } from "@/lib/types";

const initialState: LeadFormState = {
  success: false,
  message: ""
};

const customerTypes = [
  { value: "particulier", label: "Particulier" },
  { value: "professionnel", label: "Professionnel" },
  { value: "airbnb", label: "Hôte Airbnb / courte durée" }
];

const frequencies = [
  "Ponctuel",
  "Hebdomadaire",
  "Bi-mensuel",
  "Mensuel",
  "A définir ensemble"
];

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      disabled={pending}
    >
      {pending ? "Envoi en cours..." : "Envoyer la demande"}
    </button>
  );
}

function getString(formData: FormData, key: keyof LeadFormInput | "website") {
  return String(formData.get(key) || "");
}

export function LeadForm() {
  const [state, setState] = useState<LeadFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: LeadFormInput = {
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
      website: getString(formData, "website")
    };

    setIsSubmitting(true);
    setState(initialState);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as LeadFormState;
      setState(result);

      if (response.ok && result.success) {
        form.reset();
      }
    } catch {
      setState({
        success: false,
        message: "Une erreur est survenue. Merci de réessayer dans un instant."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <h2 className="font-heading text-4xl text-ocean">Formulaire de devis</h2>
        <p className="mt-3 text-sm leading-7 text-ink/72">
          Tous les champs sont pensés pour qualifier rapidement la demande et
          permettre une réponse claire.
        </p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="first_name">
            Prénom
          </label>
          <input id="first_name" name="first_name" className="input" />
          {state.fieldErrors?.first_name ? (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.first_name}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="last_name">
            Nom
          </label>
          <input id="last_name" name="last_name" className="input" />
          {state.fieldErrors?.last_name ? (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.last_name}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="email">
            E-mail
          </label>
          <input id="email" name="email" type="email" className="input" />
          {state.fieldErrors?.email ? (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.email}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="phone">
            Téléphone
          </label>
          <input id="phone" name="phone" type="tel" className="input" />
          {state.fieldErrors?.phone ? (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.phone}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="customer_type">
            Type de client
          </label>
          <select id="customer_type" name="customer_type" className="input" defaultValue="">
            <option value="" disabled>
              Sélectionner
            </option>
            {customerTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {state.fieldErrors?.customer_type ? (
            <p className="mt-2 text-sm text-red-600">
              {state.fieldErrors.customer_type}
            </p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="service_type">
            Prestation
          </label>
          <select id="service_type" name="service_type" className="input" defaultValue="">
            <option value="" disabled>
              Sélectionner
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {state.fieldErrors?.service_type ? (
            <p className="mt-2 text-sm text-red-600">
              {state.fieldErrors.service_type}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="location">
            Ville ou zone
          </label>
          <input
            id="location"
            name="location"
            className="input"
            placeholder="Ex. Saint-Julien-de-l’Escap"
          />
          {state.fieldErrors?.location ? (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.location}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="surface">
            Surface approximative
          </label>
          <input
            id="surface"
            name="surface"
            className="input"
            placeholder="Ex. 80 m² ou T3"
          />
          {state.fieldErrors?.surface ? (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.surface}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="frequency">
          Fréquence souhaitée
        </label>
        <select id="frequency" name="frequency" className="input" defaultValue="">
          <option value="" disabled>
            Sélectionner
          </option>
          {frequencies.map((frequency) => (
            <option key={frequency} value={frequency}>
              {frequency}
            </option>
          ))}
        </select>
        {state.fieldErrors?.frequency ? (
          <p className="mt-2 text-sm text-red-600">{state.fieldErrors.frequency}</p>
        ) : null}
      </div>

      <div>
        <label className="label" htmlFor="message">
          Votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="input min-h-32 resize-y"
          placeholder="Précisez le contexte, le type de logement ou le niveau d’urgence."
        />
        {state.fieldErrors?.message ? (
          <p className="mt-2 text-sm text-red-600">{state.fieldErrors.message}</p>
        ) : null}
      </div>

      <div className="rounded-[1.35rem] border border-ocean/10 bg-mist px-4 py-4">
        <label className="flex items-start gap-3 text-sm leading-6 text-ink/72" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-ocean/30"
          />
          <span>
            J’accepte que mes informations soient utilisées pour répondre à ma
            demande de contact ou de devis.
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="mt-2 text-sm text-red-600">{state.fieldErrors.consent}</p>
        ) : null}
      </div>

      {state.message ? (
        <div
          aria-live="polite"
          className={`rounded-[1.35rem] px-4 py-4 text-sm leading-6 ${
            state.success
              ? "border border-accent/20 bg-accent/10 text-ocean"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </div>
      ) : null}

      <SubmitButton pending={isSubmitting} />
    </form>
  );
}
