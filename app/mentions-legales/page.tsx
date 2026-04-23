import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions legales",
  description:
    "Mentions legales de Lilicleanservices.",
  path: "/mentions-legales"
});

export default function LegalNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Mentions legales"
        title="Les informations légales du site Lilicleanservices."
        description="Retrouvez ici les informations essentielles concernant l’éditeur du site et son hébergement."
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
              Le site est hébergé sur Vercel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean">Statut</h2>
            <p className="mt-3">
              Lilicleanservices est un service de nettoyage à domicile basé à{" "}
              {company.city}. Pour toute question, vous pouvez nous contacter via le
              téléphone ou l’email ci-dessus.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
