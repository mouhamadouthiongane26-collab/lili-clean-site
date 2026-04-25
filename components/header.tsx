import Link from "next/link";

import { QuoteLink } from "@/components/quote-link";
import { SiteLogo } from "@/components/site-logo";
import { company, siteSettings } from "@/lib/data";
import { getSafeLogoSrc } from "@/lib/logo";

export function Header() {
  const logoSrc = getSafeLogoSrc();

  return (
    <header className="sticky top-0 z-50 border-b border-ocean/10 bg-white/95 shadow-[0_10px_30px_rgba(24,92,55,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 lg:px-8">
        <SiteLogo src={logoSrc} />

        <nav className="hidden items-center gap-10 lg:flex">
          {siteSettings.navItems.map((item) => (
            item.href === "/devis" ? (
              <QuoteLink
                key={item.href}
                className="text-base font-medium text-sky underline-offset-8 transition hover:text-accent hover:underline"
              >
                {item.label}
              </QuoteLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-sky underline-offset-8 transition hover:text-accent hover:underline"
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
