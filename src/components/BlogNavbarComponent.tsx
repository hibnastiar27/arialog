"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import LogoArialog from "./LogoArialog";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Tulisan", href: "/blog" },
  { label: "Portfolio", href: "/" },
];

const BlogNavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/blog" ? pathname.startsWith("/blog") : pathname === href;

  const themeButtonClass =
    "grid place-items-center size-10 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div
        className={`mx-auto max-w-5xl rounded-[1.75rem] border transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/80 dark:bg-neutral-950/75 backdrop-blur-xl border-neutral-200/80 dark:border-neutral-800 shadow-lg shadow-neutral-900/5 dark:shadow-black/40"
            : "bg-white/40 dark:bg-neutral-950/30 backdrop-blur-md border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2 pl-4 pr-2 sm:pl-5">
          <Link
            href="/blog"
            className="flex items-center gap-2.5 rounded-full text-neutral-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
          >
            <LogoArialog className="h-6 w-auto" />
            <span className="text-base font-bold tracking-tight">
              ARIALOG<span className="text-pink-500">.</span>
            </span>
            <span className="hidden sm:inline-block font-serif italic text-neutral-500 dark:text-neutral-400 border-l border-neutral-300 dark:border-neutral-700 pl-2.5">
              journal
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav aria-label="Navigasi blog" className="hidden sm:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${
                  isActive(item.href)
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {item.href === "/" && <FiArrowUpRight className="size-3.5" />}
              </Link>
            ))}
            <span className="mx-1 h-6 w-px bg-neutral-200 dark:bg-neutral-800" aria-hidden />
            <div className="grid place-items-center size-10">
              <ThemeSwitcher className={themeButtonClass} />
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-1">
            <div className="grid place-items-center size-10">
              <ThemeSwitcher className={themeButtonClass} />
            </div>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="blog-mobile-menu"
              className={themeButtonClass}
            >
              <span className={`transition-transform duration-300 motion-reduce:transition-none ${menuOpen ? "rotate-90" : ""}`}>
                {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="blog-mobile-menu"
          className={`sm:hidden grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav aria-label="Navigasi blog" className="overflow-hidden" inert={!menuOpen}>
            <div className="flex flex-col gap-1 px-2 pb-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  {item.label}
                  <FiArrowUpRight className="size-4" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogNavbarComponent;
