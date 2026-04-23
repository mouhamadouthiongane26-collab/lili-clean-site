import type { FaqItem } from "@/lib/types";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-[1.4rem] border border-ocean/10 bg-white p-6 shadow-soft"
        >
          <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-ocean">
            {item.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-ink/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
