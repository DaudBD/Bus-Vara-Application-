import { useEffect, useState } from "react";

const COPY = {
  en: {
    tagline: "Smart Fare Calculator",
    nav: { home: "Home", routes: "Routes", about: "About" },
    langButton: "বাংলা",
  },
  bn: {
    tagline: "স্মার্ট ফেয়ার ক্যালকুলেটর",
    nav: { home: "হোম", routes: "রুট", about: "সম্পর্কে" },
    langButton: "English",
  },
};

const Header = () => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("busvara-lang") || "en"
  );
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("busvara-theme") !== "light"
  );

  useEffect(() => {
    localStorage.setItem("busvara-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("busvara-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const t = COPY[lang];
  const fontClass = lang === "bn" ? "font-bangla" : "font-sans";

  return (
    <header className="sticky top-0 z-50 border-b border-amber/10 bg-ink/90 backdrop-blur-xl dark:border-amber/10 dark:bg-ink/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="group flex items-center gap-3">
          {/* Bus Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber shadow-lg shadow-amber/20 transition-transform duration-300 group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6 text-ink"
            >
              <path d="M8 6v6" />
              <path d="M16 6v6" />
              <path d="M2 12h20" />
              <path d="M5 12v6" />
              <path d="M19 12v6" />
              <path d="M6 18h12" />
              <path d="M6 18v2" />
              <path d="M18 18v2" />
              <rect x="4" y="3" width="16" height="15" rx="2" />
            </svg>
          </div>

          {/* Brand */}
          <div>
            <h1 className="font-display text-lg font-semibold tracking-tight text-paper sm:text-xl">
              Bus<span className="text-amber">Vara</span>
            </h1>

            <p className={`${fontClass} hidden text-[10px] font-medium uppercase tracking-[0.15em] text-sage sm:block`}>
              {t.tagline}
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className={`${fontClass} hidden items-center gap-2 md:flex`}>
          <a
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-amber transition hover:bg-amber/10"
          >
            {t.nav.home}
          </a>

          <a
            href="#routes"
            className="rounded-lg px-4 py-2 text-sm font-medium text-sage transition hover:bg-teal/10 hover:text-paper"
          >
            {t.nav.routes}
          </a>

          <a
            href="#about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-sage transition hover:bg-teal/10 hover:text-paper"
          >
            {t.nav.about}
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Dark / Light Toggle */}
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/15 bg-surface text-sage transition hover:border-amber/40 hover:text-amber"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang((prev) => (prev === "en" ? "bn" : "en"))}
            className={`${lang === "en" ? "font-bangla" : "font-sans"} hidden rounded-lg border border-amber/15 bg-surface px-3 py-2 text-xs font-semibold text-sage transition hover:border-amber/40 hover:text-amber sm:block`}
          >
            {t.langButton}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/15 bg-surface text-sage transition hover:border-amber/40 hover:text-amber md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;