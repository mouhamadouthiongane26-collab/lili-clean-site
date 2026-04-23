import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Demander un devis",
  description:
    "Formulaire de devis Lilicleanservices pour vos besoins de nettoyage a Saint-Julien-de-l'Escap et alentours.",
  path: "/devis"
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Devis"
        title="Demander un devis Lilicleanservices"
        description="Remplissez le formulaire et nous vous recontactons rapidement."
      />

      <section className="mx-auto max-w-5xl px-4 py-18 sm:px-6 lg:px-8">
        <Reveal>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
