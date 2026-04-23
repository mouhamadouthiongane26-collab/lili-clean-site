import Link from "next/link";

import { company, siteSettings } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ocean/10 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-3xl text-ocean">{company.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/80">
            {company.tagline} Basé à {company.city}, le site met en avant un
            service réactif, humain et facile à contacter.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ink/45">
            {siteSettings.footerNote}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3">
            {siteSettings.navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink/80 hover:text-sky">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/mentions-legales"
                className="text-sm text-ink/80 hover:text-sky"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="text-sm text-ink/80 hover:text-sky"
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
              <Link href={company.phoneHref} className="hover:text-sky">
                {company.phoneDisplay}
              </Link>
            </li>
            <li>
              <Link
                href={company.emailHref}
                className="email-link hover:text-sky"
              >
                {company.email}
              </Link>
            </li>
            <li>
              <Link href={company.whatsappHref} className="hover:text-sky">
                WhatsApp disponible
              </Link>
            </li>
            <li className="pt-2 text-xs uppercase tracking-[0.18em] text-ink/45">
              Réponse rapide sur devis
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
