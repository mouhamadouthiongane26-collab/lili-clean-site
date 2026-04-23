import type { ReactNode } from "react";

import { ContactActions } from "@/components/contact-actions";
import { Reveal } from "@/components/reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ocean">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,169,155,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(180deg,#123a54_0%,#0d2b40_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-mist" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="max-w-4xl" variant="slide">
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-soft backdrop-blur md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foam">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-heading text-5xl leading-none text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
              {description}
            </p>
            <ContactActions className="mt-8" />
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
