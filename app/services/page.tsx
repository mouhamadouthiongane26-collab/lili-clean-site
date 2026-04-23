import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/site-images";

export const metadata = buildMetadata({
  title: "Services de nettoyage",
  description:
    "Decouvrez les prestations Lilicleanservices : menage regulier, grand nettoyage, Airbnb, vitres, repassage et plus encore.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Des services utiles, lisibles et pensés pour les vrais besoins du terrain."
        description="Chaque prestation dispose d'une page dédiée pour aider le visiteur à comprendre rapidement ce qui correspond à son besoin."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Avant / Après"
            title="Des résultats concrets là où ils comptent le plus"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="media-panel min-h-[320px] sm:min-h-[420px]" variant="zoom">
            <Image
              src={siteImages.services.src}
              alt={siteImages.services.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="media-overlay-dark absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="media-caption max-w-md text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foam">
                  Materiel professionnel
                </p>
                <p className="mt-3 text-base leading-7 text-white">
                  Des outils adaptés pour des prestations sérieuses, soignées et visiblement mieux finies.
                </p>
              </div>
            </div>
          </Reveal>

          <div id="avant-apres" className="grid gap-6">
            {siteImages.results.map((image, index) => (
              <Reveal
                key={image.src}
                className="media-panel min-h-[240px] sm:min-h-[280px]"
                variant="zoom"
                delay={index * 120}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
