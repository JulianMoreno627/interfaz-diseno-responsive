import Link from "next/link";
import { Dictionary } from "@/app/i18n/dictionaries";

export default function Details({ dict }: { dict: Dictionary }) {
  return (
    <section className="col-span-12 rounded-2xl bg-card p-6 flex items-center gap-4">
      <h2 className="text-cardtext text-xl font-bold border-r pr-4">
        {dict.sections.details.title}
      </h2>
      <ul className="flex gap-4 items-center">
        {dict.sections.details.items.map((item, idx) => (
          <li key={idx}>
            {item.href ? (
              <Link
                href={item.href}
                className="px-4 py-2 rounded-lg bg-[color:var(--foreground)]/10 text-cardtext text-sm hover:bg-[color:var(--foreground)]/20 transition-colors"
              >
                {item.text}
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-lg bg-[color:var(--foreground)]/10 text-cardtext text-sm">
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}