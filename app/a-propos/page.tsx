import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/site-images";

export const metadata = buildMetadata({
  title: "A propos",
  description:
    "Decouvrez l'approche Lilicleanservices : service humain, local, clair et oriente confiance.",
  path: "/a-propos"
});

const values = [
  {
    title: "Rigueur",
    body: "Le site et le discours de marque sont conçus pour transmettre une promesse simple : faire proprement ce qui a été promis."
  },
  {
    title: "Proximite",
    body: "L'ancrage local autour de Saint-Julien-de-l'Escap est volontaire. Il aide à rassurer et à garder un contact direct."
  },
  {
    title: "Souplesse",
    body: "Le MVP doit couvrir à la fois des besoins réguliers, des urgences ponctuelles et des situations plus saisonnières."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A propos"
        title="Une marque de nettoyage pensée pour inspirer confiance avant même le premier rendez-vous."
        description="La page A propos humanise Lilicleanservices, pose les valeurs de service et prépare la confiance nécessaire à la conversion."
      />

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="media-panel min-h-[420px]" variant="zoom">
            <Image
              src={siteImages.about.src}
              alt={siteImages.about.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="media-overlay-dark absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="media-caption max-w-lg text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foam">
                  Equipe et terrain
                </p>
                <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                  Une entreprise qui rassure d’abord par son sérieux.
                </h2>
                <p className="mt-4 text-sm leading-8 text-white">
                  Une image plus humaine et plus concrète pour montrer l’engagement sur le terrain.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8">
            <Reveal>
              <article className="card">
                <h2 className="font-heading text-4xl text-ocean">Notre approche</h2>
                <p className="mt-6 text-sm leading-8 text-ink/85">
                  Lilicleanservices se positionne comme un service de nettoyage local,
                  rassurant et très accessible. L’objectif n’est pas de surpromettre,
                  mais de montrer une entreprise sérieuse, attentive aux détails et
                  facile à contacter.
                </p>
                <p className="mt-5 text-sm leading-8 text-ink/85">
                  Cette approche convient particulièrement à un site vitrine de
                  lancement : une image professionnelle, des prestations claires et un
                  parcours de prise de contact qui réduit les hésitations.
                </p>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="card">
                <h2 className="font-heading text-4xl text-ocean">Promesse de service</h2>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-ink/85">
                  <li>Des réponses rapides sur les demandes de devis</li>
                  <li>Une communication simple et lisible</li>
                  <li>Une offre adaptée aux besoins réguliers et ponctuels</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90}>
              <article className="card h-full">
                <h3 className="text-2xl font-semibold text-ocean">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/85">{value.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
