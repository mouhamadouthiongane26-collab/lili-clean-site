import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite du site Lilicleanservices pour les demandes de contact et de devis.",
  path: "/politique-de-confidentialite"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Confidentialite"
        title="Une gestion des donnees simple et transparente."
        description="Le formulaire collecte uniquement les informations nécessaires pour répondre à votre demande et préparer un devis."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="card space-y-8 text-sm leading-8 text-ink/72">
          <section>
            <h2 className="text-xl font-semibold text-ocean">Donnees collectees</h2>
            <p className="mt-3">
              Les formulaires de contact et de devis collectent le nom, les
              coordonnées, le type de besoin, la localisation approximative, la
              fréquence souhaitée et le message libre.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean">Finalite</h2>
            <p className="mt-3">
              Ces données servent uniquement à répondre aux demandes, préparer un
              devis et assurer le suivi commercial des prospects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean">Conservation</h2>
            <p className="mt-3">
              Le formulaire ouvre un e-mail prérempli. Les données ne sont pas
              stockées dans une base du site et sont conservées uniquement dans les
              échanges nécessaires au traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean">Vos droits</h2>
            <p className="mt-3">
              Vous pouvez demander l’accès, la rectification ou la suppression de vos
              données en utilisant l’adresse de contact indiquée sur le site.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
