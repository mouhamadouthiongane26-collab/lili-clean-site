import Link from "next/link";

import { QuoteLink } from "@/components/quote-link";
import { company, siteSettings } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ocean/10 bg-[#F9FAFB] shadow-[0_10px_30px_rgba(31,41,55,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ocean/20 bg-white text-xl font-semibold text-ocean shadow-soft">
            Li
          </div>
          <div className="min-w-0">
            <p className="font-heading text-2xl leading-none text-ink">
              {company.name}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-ink/60">
              Nettoyage local premium
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {siteSettings.navItems.map((item) => (
            item.href === "/devis" ? (
              <QuoteLink
                key={item.href}
                className="text-base font-medium text-ink/80 underline-offset-8 transition hover:text-ocean hover:underline"
              >
                {item.label}
              </QuoteLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-ink/80 underline-offset-8 transition hover:text-ocean hover:underline"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link href={company.whatsappHref} className="btn-secondary">
            WhatsApp
          </Link>
          <QuoteLink className="btn-primary">Demander un devis</QuoteLink>
        </div>
      </div>
    </header>
  );
}
