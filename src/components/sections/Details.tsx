import Link from "next/link";
import { Dictionary } from "@/app/i18n/dictionaries";

export default function Details({ dict }: { dict: Dictionary }) {
  return (
    <section className="col-span-12 rounded-2xl bg-card p-6 flex items-start gap-4">
      <h2 className="text-cardtext text-xl font-bold border-r pr-4">
        {dict.sections.details.title}
      </h2>
      <ul className="flex flex-wrap gap-2 md:gap-4 items-center w-full">
        {dict.sections.details.items.map((item, idx) => (
          <li key={idx} className="w-full sm:w-auto">
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--foreground)]/10 text-cardtext text-xs md:text-sm hover:bg-[color:var(--foreground)]/20 transition-colors w-full sm:w-auto"
              >
                <span className="text-base">{item.icon}</span>
                {item.text}
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--foreground)]/10 text-cardtext text-xs md:text-sm w-full sm:w-auto">
                <span className="text-base">{item.icon}</span>
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}