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

  return (
    <aside className="w-56 shrink-0 flex flex-col gap-6 border-r border-neutral-200 dark:border-neutral-800 p-6">
      <Link href="/dashbor" className="font-serif italic text-xl font-bold text-neutral-900 dark:text-white">
        CMS Arialog
      </Link>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
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
          <button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10 transition-colors">
            Keluar
          </button>
        </form>
      </div>
    </aside>
  );
}
