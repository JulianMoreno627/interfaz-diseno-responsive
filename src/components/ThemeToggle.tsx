"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme-preference");
  if (saved === "light" || saved === "dark") return saved;
  // Fallback to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    const el = document.documentElement;
    // Remove both classes then add the current one
    el.classList.remove("theme-dark", "theme-light");
    el.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    localStorage.setItem("theme-preference", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle color theme"
      className="fixed top-6 right-28 z-50 px-3 py-2 rounded-lg text-sm font-bold bg-background text-white border border-grey hover:bg-white/10 transition-colors"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}