import { company } from "@/lib/data";
import { cn } from "@/lib/utils";
import { QuoteLink } from "@/components/quote-link";
import Link from "next/link";

interface ContactActionsProps {
  className?: string;
  compact?: boolean;
}

export function ContactActions({
  className,
  compact = false
}: ContactActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
        compact && "sm:gap-2",
        className
      )}
    >
      <QuoteLink className="btn-primary text-center">Demander un devis</QuoteLink>
      <Link href={company.phoneHref} className="btn-secondary text-center">
        Appeler maintenant
      </Link>
      <Link href={company.whatsappHref} className="btn-ghost text-center">
        WhatsApp
      </Link>
    </div>
  );
}
