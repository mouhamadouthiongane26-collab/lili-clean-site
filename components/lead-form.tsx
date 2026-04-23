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

const initialStatus: FormStatus = {
  type: "idle",
  message: ""
};

export function LeadForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      full_name: getString(formData, "full_name"),
      phone: getString(formData, "phone"),
      message: getString(formData, "message")
    };

    console.log("[LeadForm] Donnees envoyees :", payload);
    setIsSubmitting(true);
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
      };

      console.log("[LeadForm] Reponse serveur :", {
        status: response.status,
        ok: response.ok,
        result
      });

      if (!response.ok || !result.success) {
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
      className="mx-auto w-full max-w-xl space-y-5 rounded-2xl border border-ocean/10 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="space-y-2">
        <h2 className="font-heading text-3xl text-ocean sm:text-4xl">
          Demande rapide
        </h2>
        <p className="text-sm leading-6 text-ink/70">
          Laissez votre nom, votre téléphone et votre besoin. Nous vous rappelons rapidement.
        </p>
      </div>

      <div>
        <label className="label" htmlFor="full_name">
          Nom
        </label>
        <input
          id="full_name"
          name="full_name"
          className="input"
          autoComplete="name"
          required
        />
      </div>

      <div>
        <label className="label" htmlFor="phone">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="input"
          autoComplete="tel"
          required
        />
      </div>

      <div>
        <label className="label" htmlFor="message">
          Besoin
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="input min-h-28 resize-y"
          placeholder="Ex. ménage, vitres, grand nettoyage..."
        />
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
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
