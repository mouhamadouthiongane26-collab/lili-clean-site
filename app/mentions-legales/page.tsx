import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions legales",
  description:
    "Mentions legales du site vitrine Lilicleanservices. A completer avant mise en production finale.",
  path: "/mentions-legales"
});

export default function LegalNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Mentions legales"
        title="Une base juridique prête à être finalisée avant la mise en ligne."
        description="Cette page est intégrée au MVP avec les informations actuellement disponibles. Les éléments réglementaires définitifs devront être complétés avant production."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="card space-y-8 text-sm leading-8 text-ink/72">
          <section>
            <h2 className="text-xl font-semibold text-ocean">Editeur du site</h2>
            <p className="mt-3">
              {company.legalName}, basé à {company.city}. Contact : {company.phoneDisplay},{" "}
              {company.email}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean">Hebergement</h2>
            <p className="mt-3">
              Hébergement recommandé sur Vercel. Renseigner les informations exactes
              de l’hébergeur utilisé au moment de la mise en ligne.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean">Statut</h2>
            <p className="mt-3">
              Les mentions légales définitives devront être complétées avec la forme
              juridique, le numéro SIRET, le responsable de publication et les
              coordonnées réglementaires finales.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
