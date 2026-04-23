import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/data";
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
        title="Expliquez votre besoin, on vous repond avec une proposition claire."
        description="Le formulaire est conçu pour qualifier rapidement la demande et préparer une réponse simple, utile et rassurante."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <Reveal>
          <article className="card">
          <h2 className="font-heading text-4xl text-ocean">Ce formulaire couvre</h2>
          <ul className="mt-8 space-y-4 text-sm leading-7 text-ink/85">
            <li>Ménage à domicile régulier</li>
            <li>Grand nettoyage ou remise en ordre</li>
            <li>Rotation Airbnb et location courte durée</li>
            <li>Après déménagement, vitres ou besoin mixte</li>
          </ul>
          <p className="mt-8 text-sm leading-7 text-ink/85">
            Pour une demande urgente, vous pouvez aussi appeler directement au{" "}
            <span className="font-semibold text-ocean">{company.phoneDisplay}</span>.
          </p>
          </article>
        </Reveal>

        <Reveal className="card" delay={120}>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
