"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";

const BlogNavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-widest uppercase">Portfolio</span>
        </Link>
        <Link href="/blog" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-serif italic text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Journal.
          </span>
        </Link>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default BlogNavbarComponent;
