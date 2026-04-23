import Link from "next/link";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Lilicleanservices par telephone, WhatsApp ou formulaire depuis Saint-Julien-de-l'Escap.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Un contact direct, local et sans detour."
        description="Le site met en avant les canaux les plus utiles pour convertir vite : telephone, WhatsApp et formulaire."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <article className="card">
          <h2 className="font-heading text-4xl text-ocean">Coordonnees</h2>
          <ul className="mt-8 space-y-6 text-sm leading-7 text-ink/80">
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/45">
                Telephone
              </span>
              <Link href={company.phoneHref} className="text-lg font-semibold text-ocean">
                {company.phoneDisplay}
              </Link>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/45">
                Email
              </span>
              <Link
                href={company.emailHref}
                className="email-link text-base font-medium text-ocean"
              >
                {company.email}
              </Link>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/45">
                Zone
              </span>
              <span>{company.serviceAreaLabel}</span>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/45">
                WhatsApp
              </span>
              <Link href={company.whatsappHref} className="text-ocean">
                Ouvrir la conversation
              </Link>
            </li>
          </ul>
          </article>
        </Reveal>

        <Reveal className="card" delay={120}>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
