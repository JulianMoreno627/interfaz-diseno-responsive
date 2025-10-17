'use client';

import Link from 'next/link';
import { Lang, languages } from '@/app/i18n/config';
import { useEffect, useState } from 'react';

const flagIcons: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
};

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: Lang;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    }
    
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('theme-dark');
      setTheme(isDark ? 'dark' : 'light');
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-2">
      {languages.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`px-3 py-2 rounded-lg text-xl font-bold transition-colors ${
            currentLang === l
              ? theme === 'dark'
                ? 'bg-white text-black'
                : 'bg-black text-white'
              : theme === 'dark'
              ? 'bg-[#1a1a1a] text-white border border-grey'
              : 'bg-white text-black border border-gray-300'
          }`}
          aria-current={currentLang === l ? 'true' : undefined}
        >
          {flagIcons[l]}
        </Link>
      ))}
    </nav>
  );
}