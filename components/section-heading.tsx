import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading text-4xl leading-tight text-ocean sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
