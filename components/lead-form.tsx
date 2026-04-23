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
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  message?: string;
};

const initialStatus: FormStatus = {
  type: "idle",
  message: ""
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
      first_name: getString(formData, "first_name"),
      last_name: getString(formData, "last_name"),
      email: getString(formData, "email"),
      phone: getString(formData, "phone"),
      address: getString(formData, "address"),
      message: getString(formData, "message")
    };
    const nextErrors: FormErrors = {};

    if (!payload.first_name) {
      nextErrors.first_name = "Merci d'indiquer votre prénom.";
    }

    if (!payload.last_name) {
      nextErrors.last_name = "Merci d'indiquer votre nom.";
    }

    if (!payload.email) {
      nextErrors.email = "Merci d'indiquer votre adresse email.";
    } else if (!isValidEmail(payload.email)) {
      nextErrors.email = "Merci d'indiquer une adresse email valide.";
    }

    if (!payload.phone) {
      nextErrors.phone = "Merci d'indiquer votre numéro de téléphone.";
    }

    if (!payload.address) {
      nextErrors.address = "Merci d'indiquer votre adresse postale.";
    }

    if (!payload.message) {
      nextErrors.message = "Merci de décrire votre besoin.";
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
        message: result.message || "Merci pour votre demande. Nous vous recontactons rapidement."
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
          <label className="label" htmlFor="first_name">
            Prénom
          </label>
          <input
            id="first_name"
            name="first_name"
            className="input"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.first_name)}
            required
          />
          {errors.first_name ? (
            <p className="mt-2 text-sm text-red-600">{errors.first_name}</p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="last_name">
            Nom
          </label>
          <input
            id="last_name"
            name="last_name"
            className="input"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.last_name)}
            required
          />
          {errors.last_name ? (
            <p className="mt-2 text-sm text-red-600">{errors.last_name}</p>
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
          <label className="label" htmlFor="phone">
            Numéro de téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="input"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            required
          />
          {errors.phone ? (
            <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="address">
          Adresse postale
        </label>
        <input
          id="address"
          name="address"
          className="input"
          autoComplete="street-address"
          aria-invalid={Boolean(errors.address)}
          required
        />
        {errors.address ? (
          <p className="mt-2 text-sm text-red-600">{errors.address}</p>
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
          className="input min-h-36 resize-y"
          placeholder="Décrivez la prestation souhaitée, la surface, vos disponibilités ou le niveau d'urgence."
          aria-invalid={Boolean(errors.message)}
          required
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-red-600">{errors.message}</p>
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
