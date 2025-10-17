"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme-preference");
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove("theme-dark", "theme-light");
    el.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    localStorage.setItem("theme-preference", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle color theme"
      className={`fixed top-6 right-48 z-50 px-3 py-2 rounded-lg text-sm font-bold border transition-colors ${
        theme === "dark"
          ? "bg-[#1a1a1a] text-white border-grey hover:bg-white/10"
          : "bg-white text-black border-gray-300 hover:bg-gray-100"
      }`}
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}