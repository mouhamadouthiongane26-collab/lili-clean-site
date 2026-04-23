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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,231,243,0.16),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(214,31,117,0.16),transparent_20%),linear-gradient(180deg,#1c6a3d_0%,#154c2e_100%)]" />
      <div className="absolute right-[-6rem] top-[-5rem] h-56 w-56 rounded-full bg-[rgba(252,231,243,0.12)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-mist" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="max-w-4xl" variant="slide">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-soft backdrop-blur md:p-10">
            <p className="eyebrow-badge border-white/10 bg-white/12 text-white">
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
