"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pagesWithLocalQuoteForm = new Set(["/", "/contact", "/devis"]);

function getQuoteHref(pathname: string | null) {
  return pathname && pagesWithLocalQuoteForm.has(pathname) ? "#devis" : "/#devis";
}

interface QuoteLinkProps {
  children: ReactNode;
  className?: string;
}

export function QuoteLink({ children, className }: QuoteLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={getQuoteHref(pathname)} className={className}>
      {children}
    </Link>
  );
}
