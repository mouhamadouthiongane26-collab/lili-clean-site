"use client";

import type { FormEvent } from "react";
import { useState } from "react";

function getString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

type FormErrors = {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  adresse?: string;
  surface?: string;
  besoin?: string;
};

const initialStatus: FormStatus = {
  type: "idle",
  message: ""
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidSurface(surface: string) {
  const numberValue = Number(surface.replace(",", "."));

  return Number.isFinite(numberValue) && numberValue > 0;
}

export function LeadForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      prenom: getString(formData, "prenom"),
      nom: getString(formData, "nom"),
      email: getString(formData, "email"),
      telephone: getString(formData, "telephone"),
      adresse: getString(formData, "adresse"),
      surface: getString(formData, "surface"),
      besoin: getString(formData, "besoin")
    };
    const nextErrors: FormErrors = {};

    if (!payload.prenom) {
      nextErrors.prenom = "Merci d'indiquer votre prénom.";
    }

    if (!payload.nom) {
      nextErrors.nom = "Merci d'indiquer votre nom.";
    }

    if (!payload.email) {
      nextErrors.email = "Merci d'indiquer votre adresse email.";
    } else if (!isValidEmail(payload.email)) {
      nextErrors.email = "Merci d'indiquer une adresse email valide.";
    }

    if (!payload.telephone) {
      nextErrors.telephone = "Merci d'indiquer votre numéro de téléphone.";
    }

    if (!payload.adresse) {
      nextErrors.adresse = "Merci d'indiquer votre adresse postale.";
    }

    if (!payload.surface) {
      nextErrors.surface = "Merci d'indiquer la surface.";
    } else if (!isValidSurface(payload.surface)) {
      nextErrors.surface = "Merci d'indiquer une surface valide.";
    }

    if (!payload.besoin) {
      nextErrors.besoin = "Merci de décrire votre besoin.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Merci de corriger les champs indiqués."
      });

      const firstErrorField = Object.keys(nextErrors)[0];
      const input = form.elements.namedItem(firstErrorField);

      if (input instanceof HTMLElement) {
        input.focus();
      }

      return;
    }

    console.log("[LeadForm] Donnees envoyees :", payload);
    setIsSubmitting(true);
    setErrors({});
    setStatus(initialStatus);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        fieldErrors?: FormErrors;
      };

      console.log("[LeadForm] Reponse serveur :", {
        status: response.status,
        ok: response.ok,
        result
      });

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
        }

        throw new Error(
          result.message || "Une erreur est survenue. Merci de réessayer dans un instant."
        );
      }

      setStatus({
        type: "success",
        message: result.message || "Demande envoyée avec succès"
      });
      form.reset();
    } catch (error) {
      console.error("[LeadForm] Echec de l'envoi :", error);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Merci de réessayer dans un instant."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-3xl space-y-6 rounded-2xl border border-ocean/10 bg-white p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div className="space-y-2">
        <h2 className="font-heading text-3xl text-ocean sm:text-4xl">
          Demande de devis
        </h2>
        <p className="text-sm leading-6 text-ink/70">
          Remplissez vos coordonnées et votre besoin. Nous vous recontactons rapidement.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="prenom">
            Prénom
          </label>
          <input
            id="prenom"
            name="prenom"
            className="input"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.prenom)}
            required
          />
          {errors.prenom ? (
            <p className="mt-2 text-sm text-red-600">{errors.prenom}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="nom">
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            className="input"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.nom)}
            required
          />
          {errors.nom ? (
            <p className="mt-2 text-sm text-red-600">{errors.nom}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="email">
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            required
          />
          {errors.email ? (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="telephone">
            Numéro de téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            className="input"
            autoComplete="tel"
            aria-invalid={Boolean(errors.telephone)}
            required
          />
          {errors.telephone ? (
            <p className="mt-2 text-sm text-red-600">{errors.telephone}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_11rem]">
        <div>
          <label className="label" htmlFor="adresse">
            Adresse postale
          </label>
          <input
            id="adresse"
            name="adresse"
            className="input"
            autoComplete="street-address"
            aria-invalid={Boolean(errors.adresse)}
            required
          />
          {errors.adresse ? (
            <p className="mt-2 text-sm text-red-600">{errors.adresse}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="surface">
            Surface (m²)
          </label>
          <input
            id="surface"
            name="surface"
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            className="input"
            placeholder="Ex : 80"
            aria-invalid={Boolean(errors.surface)}
            required
          />
          {errors.surface ? (
            <p className="mt-2 text-sm text-red-600">{errors.surface}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="besoin">
          Votre besoin
        </label>
        <textarea
          id="besoin"
          name="besoin"
          rows={5}
          className="input min-h-36 resize-y"
          placeholder="Décrivez la prestation souhaitée, la surface, vos disponibilités ou le niveau d'urgence."
          aria-invalid={Boolean(errors.besoin)}
          required
        />
        {errors.besoin ? (
          <p className="mt-2 text-sm text-red-600">{errors.besoin}</p>
        ) : null}
      </div>

      {status.message ? (
        <p
          aria-live="polite"
          className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
            status.type === "success"
              ? "border border-accent/20 bg-accent/10 text-ocean"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
      </button>
    </form>
  );
}
