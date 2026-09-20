"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { FiMenu, FiX } from "react-icons/fi";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/blog" ? pathname.startsWith("/blog") : pathname === href;

  const linkClass = (href: string) =>
    `relative text-xs uppercase tracking-widest font-medium transition-colors duration-300 pb-1 after:absolute after:left-0 after:bottom-0 after:h-px after:transition-all after:duration-300 ${
      isActive(href)
        ? "text-neutral-900 dark:text-white after:w-full after:bg-pink-500"
        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white after:w-0 hover:after:w-full after:bg-neutral-400 dark:after:bg-neutral-500"
    }`;

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/blog">
          <span className="font-serif italic text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Journal.
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-neutral-900 dark:text-white"
          >
            <div className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-5">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3 text-sm uppercase tracking-widest font-medium border-b border-neutral-200/60 dark:border-neutral-800/60 last:border-none transition-colors ${
                isActive(item.href)
                  ? "text-pink-500"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BlogNavbarComponent;
