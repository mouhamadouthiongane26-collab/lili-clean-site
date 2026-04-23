"use client";

import type { FormEvent } from "react";

import { company } from "@/lib/data";

function getString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export function LeadForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = getString(formData, "full_name");
    const phone = getString(formData, "phone");
    const message = getString(formData, "message");

    const subject = `Demande de devis - ${fullName}`;
    const body = [
      "Bonjour Lilicleanservice,",
      "",
      "Je souhaite être recontacté pour un devis.",
      "",
      `Nom : ${fullName}`,
      `Téléphone : ${phone}`,
      "",
      message ? `Message : ${message}` : "Message : Non précisé",
      "",
      "Merci."
    ].join("\n");

    const mailtoLink = `${company.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    form.reset();
    window.location.href = mailtoLink;
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

      <button type="submit" className="btn-primary w-full">
        Envoyer ma demande
      </button>
    </form>
  );
}
