import Link from "next/link";
import { Dictionary } from "@/app/i18n/dictionaries";

export default function Portfolio({ dict }: { dict: Dictionary }) {
  return (
    <section className="col-span-12 rounded-2xl bg-card p-6 flex items-center gap-4">
      <h2 className="text-cardtext text-xl font-bold border-r pr-4">
        {dict.sections.portfolio.title}
      </h2>
      <div className="flex flex-wrap gap-2 md:gap-3 w-full">
        {dict.sections.portfolio.items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--foreground)]/10 text-cardtext text-xs md:text-sm hover:bg-[color:var(--foreground)]/20 transition-colors w-full sm:w-auto"
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}