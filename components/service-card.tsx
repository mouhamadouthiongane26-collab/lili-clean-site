import Link from "next/link";

import type { ServiceItem } from "@/lib/types";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="card group relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(82,169,155,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,246,243,0.98))]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {service.badge}
          </span>
          <span className="text-xs uppercase tracking-[0.16em] text-ink/40">
            Service detaille
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-ocean">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-ink/72">{service.excerpt}</p>

        <ul className="mt-6 space-y-3 text-sm text-ink/68">
          {service.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${service.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean transition group-hover:gap-3"
        >
          Voir la prestation
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
