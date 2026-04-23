import Link from "next/link";

import { company } from "@/lib/data";
import { QuoteLink } from "@/components/quote-link";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ocean/10 bg-white/95 p-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <QuoteLink className="btn-primary px-2 py-3 text-center text-sm">
          Devis
        </QuoteLink>
        <Link
          href={company.phoneHref}
          className="btn-secondary px-2 py-3 text-center text-sm"
        >
          Appeler
        </Link>
        <Link
          href={company.whatsappHref}
          className="btn-ghost px-2 py-3 text-center text-sm"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
