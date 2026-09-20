"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/actions";

const navItems = [
  { label: "Profile", href: "/dashbor/profile" },
  { label: "Pendidikan", href: "/dashbor/educations" },
  { label: "Pengalaman", href: "/dashbor/experiences" },
  { label: "Showcase", href: "/dashbor/showcases" },
];

export default function AdminNav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);
  const activeClass =
    "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900";
  const inactiveClass =
    "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800";

  return (
    <>
      {/* Mobile top nav */}
      <header className="md:hidden sticky top-0 z-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/dashbor" className="font-serif italic text-lg font-bold text-neutral-900 dark:text-white">
            CMS Arialog
          </Link>
          <form action={logoutAction}>
            <button className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Keluar
            </button>
          </form>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-4 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href) ? activeClass : inactiveClass
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 shrink-0 flex-col gap-6 border-r border-neutral-200 dark:border-neutral-800 p-6">
        <Link href="/dashbor" className="font-serif italic text-xl font-bold text-neutral-900 dark:text-white">
          CMS Arialog
        </Link>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href) ? activeClass : inactiveClass
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <Link
            href="/"
            target="_blank"
            className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Lihat Situs ↗
          </Link>
          <form action={logoutAction}>
            <button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              Keluar
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
