'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Spinner } from "@heroui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Spinner aria-label="Loading theme" color="danger" />
  )

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className={className}
    >
      {isDark ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
    </button>
  )
}

export default ThemeSwitcher;
