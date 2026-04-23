import Link from "next/link";

import { QuoteLink } from "@/components/quote-link";
import { company, siteSettings } from "@/lib/data";

export function Footer() {
  return (
    <footer className="section-soft border-t border-ocean/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="section-card grid gap-12 px-6 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <p className="font-heading text-3xl text-ocean">{company.name}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink/80">
              {company.tagline} Basé à {company.city}, le site met en avant un
              service réactif, humain et facile à contacter.
            </p>
            {siteSettings.footerNote ? (
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ink/45">
                {siteSettings.footerNote}
              </p>
            ) : null}
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {siteSettings.navItems.map((item) => (
                <li key={item.href}>
                  {item.href === "/devis" ? (
                    <QuoteLink className="text-sm text-sky transition hover:text-accent">
                      {item.label}
                    </QuoteLink>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-sky transition hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-sky transition hover:text-accent"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-sm text-sky transition hover:text-accent"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li>{company.city}</li>
              <li>
                <Link href={company.phoneHref} className="text-sky transition hover:text-accent">
                  {company.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={company.emailHref}
                  className="email-link text-sky transition hover:text-accent"
                >
                  {company.email}
                </Link>
              </li>
              <li>
                <Link
                  href={company.whatsappHref}
                  className="text-sky transition hover:text-accent"
                >
                  WhatsApp disponible
                </Link>
              </li>
              <li className="pt-2 text-xs uppercase tracking-[0.18em] text-ink/45">
                Réponse rapide sur devis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
