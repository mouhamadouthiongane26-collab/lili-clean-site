import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
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
        title="Demander un devis Lilicleanservices"
        description="Laissez vos informations et nous vous recontactons rapidement."
      />

      <section className="mx-auto max-w-5xl px-4 py-18 sm:px-6 lg:px-8">
        <Reveal>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
