"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/blog";

// Jarak dari atas viewport (di bawah navbar) untuk menentukan heading yang sedang dibaca.
const ACTIVE_OFFSET = 140;

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = item.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const minLevel = Math.min(...items.map((t) => t.level));

  return (
    <ol className="flex flex-col border-l border-neutral-200 dark:border-neutral-800">
      {items.map((item) => {
        const isActive = item.id === activeId;
        const depth = Math.min(item.level - minLevel, 2);
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`relative -ml-px block border-l-2 py-1.5 text-sm leading-snug transition-colors ${
                depth === 0 ? "pl-4" : depth === 1 ? "pl-8" : "pl-12"
              } ${
                isActive
                  ? "border-pink-500 font-medium text-neutral-900 dark:text-white"
                  : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
