"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SiteLogoProps = {
  src: string | null;
};

const logoAlt = "Logo LiliCleanServices";

export function SiteLogo({ src }: SiteLogoProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const shouldShowImage = Boolean(src) && !hasImageError;

  return (
    <Link
      href="/"
      aria-label="Accueil LiliCleanServices"
      className="flex min-w-0 items-center gap-3"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ocean/10 bg-white shadow-soft sm:h-14 sm:w-14">
        {shouldShowImage ? (
          <Image
            src={src as string}
            alt={logoAlt}
            width={56}
            height={56}
            priority
            sizes="(min-width: 640px) 56px, 48px"
            className="h-full w-full object-contain p-1"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <span
            aria-hidden="true"
            className="font-heading text-sm font-bold uppercase text-ocean sm:text-base"
          >
            LCS
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block font-heading text-lg leading-tight text-ink sm:text-2xl">
          LiliCleanServices
        </span>
        <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-ocean/80 sm:text-xs sm:tracking-[0.22em]">
          Nettoyage professionnel
        </span>
      </span>
    </Link>
  );
}
