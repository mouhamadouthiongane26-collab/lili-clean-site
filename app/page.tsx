import Image from "next/image";
import Link from "next/link";

import { ContactActions } from "@/components/contact-actions";
import { FaqList } from "@/components/faq-list";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StructuredData } from "@/components/structured-data";
import { company, faq, featuredServices, testimonials } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/site-images";

export const metadata = buildMetadata({
  title: "Nettoyage local fiable a Saint-Julien-de-l'Escap",
  description:
    "Site vitrine professionnel pour Lilicleanservices : menage regulier, Airbnb, nettoyage apres demenagement, vitres et repassage."
});

const trustPoints = [
  "Réponse rapide sur téléphone, formulaire et WhatsApp",
  "Interventions ponctuelles ou régulières selon vos besoins",
  "Approche locale autour de Saint-Julien-de-l'Escap"
];

const advantages = [
  {
    title: "✔ Travail soigné",
    body: "Des résultats visibles, dès la première intervention."
  },
  {
    title: "✔ Confiance et discrétion",
    body: "Une personne sérieuse, discrète et de confiance chez vous."
  },
  {
    title: "✔ Prestations adaptées",
    body: "Ponctuel ou régulier, selon votre besoin."
  },
  {
    title: "✔ Matériel professionnel",
    body: "Matériel et produits adaptés pour un nettoyage efficace."
  },
  {
    title: "✔ Intervention rapide",
    body: "Un créneau proposé selon vos disponibilités."
  },
  {
    title: "✔ Satisfaction client",
    body: "La satisfaction client au cœur de chaque prestation."
  }
];

const processSteps = [
  "Vous nous expliquez votre besoin en quelques lignes ou par téléphone.",
  "Nous revenons vers vous avec une réponse claire sur la faisabilité et la prestation adaptée.",
  "L'intervention est organisée avec un cadre simple, sérieux et lisible."
];

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <section className="hero-shell overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-22 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl" variant="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky">
              Nettoyage premium sobre
            </p>
            <h1 className="mt-5 font-heading text-6xl leading-[0.92] text-ocean sm:text-7xl">
              {company.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/85">
              {company.heroSubtitle}
            </p>

            <div className="mt-8">
              <ContactActions />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className="glass-panel p-4"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <p className="text-sm leading-6 text-ink/85">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="media-panel min-h-[460px]" variant="zoom" delay={120}>
            <Image
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.18),rgba(17,24,39,0.82))]" />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="media-caption max-w-max px-4 py-3 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foam">
                  Maison propre
                </p>
                <p className="mt-2 text-sm leading-6 text-white">
                  Profitez d’un intérieur parfaitement propre, sans lever le petit doigt.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.4rem] border border-white/15 bg-black/60 p-5 text-white backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                    Zone d’intervention
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {company.serviceAreaLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    {company.serviceArea}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/15 bg-black/60 p-5 text-white backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                      Contact direct
                    </p>
                    <p className="mt-3 text-xl font-semibold">{company.phoneDisplay}</p>
                    <p className="email-link mt-2 text-sm text-white">{company.email}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/15 bg-black/60 p-5 text-white backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                      Engagement
                    </p>
                    <p className="mt-3 text-lg leading-8 text-white">
                      {company.responsePromise}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services phares"
            title="Des prestations pensées pour le quotidien, les rotations et les remises en ordre."
            description="Des prestations de nettoyage utiles et claires, pour répondre simplement à vos besoins."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal className="media-panel min-h-[420px]" variant="zoom">
            <Image
              src={siteImages.servicesVisual.src}
              alt={siteImages.servicesVisual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08),rgba(17,24,39,0.28))]" />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <ServiceCard service={service} showImage={false} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10" delay={180}>
          <div className="flex flex-wrap gap-3">
            <Link href="/services" className="btn-secondary">
              Voir toutes les prestations
            </Link>
            <Link href="/services#avant-apres" className="btn-ghost">
              Voir les avant / après
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Confiance et qualité"
              title="Pourquoi choisir Lilicleanservices ?"
              description="Un service fiable, soigné et pensé pour vous garantir un intérieur impeccable, sans contrainte."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="card h-full">
                    <h3 className="text-2xl font-semibold text-ocean">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-ink/85">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="media-panel min-h-[380px]" variant="zoom" delay={120}>
              <Image
                src={siteImages.whyChoose.src}
                alt={siteImages.whyChoose.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="media-overlay-dark absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="media-caption max-w-lg text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foam">
                    Presence humaine
                  </p>
                  <h3 className="mt-3 font-heading text-4xl text-white">
                    Un service professionnel, humain et rassurant.
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white">
                    Une image claire pour donner un visage au service et renforcer la confiance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Comment ca se passe"
              title="Trois etapes simples pour passer du besoin au rendez-vous."
            />
          </Reveal>

          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 90}>
                <article className="card flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean text-lg font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-sm leading-7 text-ink/85">{step}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-22 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Témoignages"
              title="Avis clients"
              description="La satisfaction de nos clients est notre priorité. Découvrez leurs retours après intervention."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.quote} delay={index * 90}>
                <article className="card h-full">
                  <p className="text-gold">{"⭐⭐⭐⭐⭐"}</p>
                  <p className="mt-5 text-sm leading-7 text-ink/85">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-6 border-t border-ocean/8 pt-5">
                    <p className="font-semibold text-ocean">— {testimonial.name}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={360}>
            <p className="mt-10 text-sm leading-7 text-ink/70">
              D&apos;autres avis seront bientôt disponibles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Les questions qui reviennent le plus avant un devis."
            centered
          />
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-4xl" delay={120}>
          <FaqList items={faq} />
        </Reveal>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-22 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Demande de devis"
              title="Une prise de contact rapide, même si votre besoin n'entre pas encore dans une case."
            />
            <p className="mt-8 text-sm leading-7 text-ink/85">
              Si vous préférez aller plus vite, vous pouvez aussi nous appeler{" "}
              <span className="whitespace-nowrap">
                au{" "}
                <Link href={company.phoneHref} className="font-semibold text-ocean">
                  {company.phoneDisplay}
                </Link>
              </span>{" "}
              ou écrire directement sur{" "}
              <Link href={company.whatsappHref} className="font-semibold text-ocean">
                WhatsApp
              </Link>
              .
            </p>
          </Reveal>

          <Reveal className="card" variant="up" delay={120}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
