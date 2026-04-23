import Link from "next/link";

import { company, siteSettings } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ocean/10 bg-white/94 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sky/20 bg-sky/10 text-lg font-semibold text-ocean shadow-soft">
            Li
          </div>
          <div className="min-w-0">
            <p className="font-heading text-xl leading-none text-ocean">
              {company.name}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-ink/60">
              Nettoyage local premium
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteSettings.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition hover:text-sky"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link href={company.whatsappHref} className="btn-secondary">
            WhatsApp
          </Link>
          <Link href="/devis" className="btn-primary">
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
}
