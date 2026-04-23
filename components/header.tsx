import Image from "next/image";
import Link from "next/link";

import { QuoteLink } from "@/components/quote-link";
import { company, siteSettings } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ocean/10 bg-white/95 shadow-[0_10px_30px_rgba(24,92,55,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/LOGO.png"
            alt="LiliCleanServices - Nettoyage professionnel"
            width={56}
            height={56}
            priority
            className="h-12 w-12 rounded-full border border-ocean/10 bg-white object-contain p-1 shadow-soft sm:h-14 sm:w-14"
          />
          <div className="min-w-0">
            <p className="font-heading text-lg leading-tight text-ink sm:text-2xl">
              {company.name}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ocean/80 sm:text-xs sm:tracking-[0.22em]">
              Nettoyage professionnel
            </p>
          </div>
        </Link>

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
