import Image from "next/image";
import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import Portfolio from "@/components/sections/Portfolio";
import Details from "@/components/sections/Details";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <ThemeToggle />
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">

        <span className="flex items-center justify-center col-span-12 md:col-span-3 md:row-span-2 bg-white rounded-2xl overflow-hidden relative">
          <Image src="/avatar.jpg" alt="avatar" width={600} height={600} className="w-full h-auto md:w-[300px]" />

          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 md:hidden">

            {dict.sections.details.items.slice(0, 3).map((item, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-card text-cardtext text-xs shadow-sm">
                {item.text}
              </span>
            ))}
          </div>
        </span>

        <p className="p-5 text-2xl text-cardtext col-span-12 md:col-span-9 rounded-2xl bg-card">
          {dict.intro}
        </p>

        <ul className="flex items-center col-span-12 md:col-span-9 gap-4 p-5 rounded-2xl bg-card text-cardtext">
          <li className="text-xl font-bold border-r pr-4">
            {dict.sections.interests.title}
          </li>
          {dict.sections.interests.items.map((item) => (
            <li
              key={item}
              className="flex items-center rounded-lg text-cardtext text-sm px-4 py-2 bg-[color:var(--foreground)]/10"
            >
              {item}
            </li>
          ))}
        </ul>

        <article className="col-span-12 md:col-span-6 rounded-2xl bg-card p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col">
              <h3 className="text-2xl font-bold text-cardtext">
                {dict.sections.experience.freelance.title}
              </h3>
              <p className="text-grey text-sm">
                {dict.sections.experience.freelance.role}
              </p>
            </header>
            <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
              {dict.sections.experience.freelance.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-cardtext text-sm mt-6">
            {dict.sections.experience.freelance.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        <article className="col-span-12 md:col-span-6 rounded-2xl bg-card p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col">
              <h3 className="text-2xl font-bold text-cardtext">
                {dict.sections.experience.meetzed.title}
              </h3>
              <p className="text-grey text-sm">
                {dict.sections.experience.meetzed.role}
              </p>
            </header>
            <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
              {dict.sections.experience.meetzed.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-cardtext text-sm mt-6">
            {dict.sections.experience.meetzed.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        <ul className="flex gap-4 items-center col-span-12 md:col-span-6 rounded-2xl bg-card p-10 text-cardtext">
          <li className="text-xl font-bold border-r pr-4">
            {dict.sections.designTools}
          </li>
          <li className="flex items-center bg-[#360300] rounded-lg font-bold text-[#da9f4c] text-xl px-4 py-2">
            Ai
          </li>
          <li className="flex items-center bg-[#0b172a] rounded-lg font-bold text-[#74aaf2] text-xl px-4 py-2">
            Ps
          </li>
          <li className="flex items-center bg-[#59051e] rounded-lg font-bold text-[#d84b6f] text-xl px-4 py-2">
            Id
          </li>
          <li className="flex items-center bg-[#480d30] rounded-lg font-bold text-[#de6ff0] text-xl px-4 py-2">
            Xd
          </li>
        </ul>

        <section className="flex flex-col gap-4 items-center col-span-12 md:col-span-6 md:row-span-3 rounded-2xl bg-card p-10">
          <article className="flex items-center justify-between w-full border-b border-b-grey pb-8">
            <span className="flex flex-col">
              <h2 className="text-cardtext text-3xl font-bold">
                {dict.sections.education.highSchool.title}
              </h2>
              <p className="text-grey text-lg">
                {dict.sections.education.highSchool.field}
              </p>
              <p className="text-grey text-sm">
                {dict.sections.education.highSchool.location}
              </p>
            </span>
            <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
              {dict.sections.education.highSchool.period}
            </span>
          </article>

          <article className="flex items-center justify-between w-full border-b border-b-grey pb-8">
            <span className="flex flex-col">
              <h2 className="text-cardtext text-3xl font-bold">
                {dict.sections.education.diploma.title}
              </h2>
              <p className="text-grey text-lg">
                {dict.sections.education.diploma.field}
              </p>
              <p className="text-grey text-sm">
                {dict.sections.education.diploma.location}
              </p>
            </span>
            <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
              {dict.sections.education.diploma.period}
            </span>
          </article>

          <article className="flex items-center justify-between w-full">
            <span className="flex flex-col">
              <h2 className="text-cardtext text-3xl font-bold">
                {dict.sections.education.graduation.title}
              </h2>
              <p className="text-grey text-lg">
                {dict.sections.education.graduation.field}
              </p>
              <p className="text-grey text-sm">
                {dict.sections.education.graduation.location}
              </p>
            </span>
            <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
              {dict.sections.education.graduation.period}
            </span>
          </article>
        </section>

        <ul className="flex gap-4 items-center col-span-12 md:col-span-6 rounded-2xl bg-card p-10 text-cardtext">
          <li className="text-xl font-bold border-r pr-4">
            {dict.sections.editingTools}
          </li>
          <li className="flex items-center bg-[#000155] rounded-lg font-bold text-[#a0a0f9] text-xl px-4 py-2">
            Ae
          </li>
          <li className="flex items-center bg-[#02035e] rounded-lg font-bold text-[#9997f9] text-xl px-4 py-2">
            Pr
          </li>
        </ul>

        <ul className="flex gap-4 items-center col-span-12 md:col-span-6 rounded-2xl bg-card p-10 text-cardtext">
          <li className="text-xl font-bold border-r pr-4">
            {dict.sections.languages}
          </li>
          <li className="text-4xl">🇮🇳</li>
          <li className="text-4xl">🇬🇧</li>
          <li className="text-4xl">🇺🇸</li>
        </ul>

        <Portfolio dict={dict} />

        <Details dict={dict} />
      </main>
    </div>
  );
}