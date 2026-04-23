import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactActions } from "@/components/contact-actions";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return buildMetadata({
      title: "Service introuvable",
      description: "La prestation demandee n'existe pas.",
      path: "/services"
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={service.badge}
        title={service.title}
        description={service.intro}
      >
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink/66">
          <span className="rounded-full border border-ocean/10 bg-white px-4 py-2">
            Saint-Julien-de-l’Escap et alentours
          </span>
          <span className="rounded-full border border-ocean/10 bg-white px-4 py-2">
            Devis rapide
          </span>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <article className="card">
            <h2 className="font-heading text-4xl text-ocean">Ce que vous gagnez</h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-sm leading-7 text-ink/72">{benefit}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2 className="font-heading text-4xl text-ocean">Cas d’usage</h2>
            <ul className="mt-8 space-y-4">
              {service.useCases.map((useCase) => (
                <li key={useCase} className="text-sm leading-7 text-ink/72">
                  {useCase}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="card mt-8">
          <h2 className="font-heading text-4xl text-ocean">Deroule de la prestation</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.35rem] border border-ocean/10 bg-mist p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-sky">
                  Etape {index + 1}
                </p>
                <p className="mt-4 text-sm leading-7 text-ink/72">{step}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-8 card">
          <h2 className="font-heading text-4xl text-ocean">
            Besoin d’une variante ou d’une prestation sur mesure ?
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-ink/72">
            Même si votre besoin ne correspond pas exactement au libellé de cette
            page, vous pouvez nous écrire. Le site est volontairement pensé pour
            accueillir des demandes simples, ponctuelles ou mixtes.
          </p>
          <ContactActions className="mt-8" />
          <Link
            href="/services"
            className="mt-6 inline-flex text-sm font-semibold text-sky transition hover:text-accent"
          >
            Retourner a la page services
          </Link>
        </div>
      </section>
    </>
  );
}
