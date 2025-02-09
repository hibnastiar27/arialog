'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Spinner } from "@heroui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Spinner aria-label="Loading theme" color="danger" />
  )

  if (resolvedTheme === 'dark') {
    return (
      <div className="">
        <SunIcon className="size-6" onClick={() => setTheme('light')} />
      </div>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <div className="">
        <MoonIcon className="size-6" onClick={() => setTheme('dark')} />
      </div>
    )
  }
}

export default ThemeSwitcher;