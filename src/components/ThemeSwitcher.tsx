'use client'

import { Switch } from "@heroui/switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi"
import { Spinner } from "@heroui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Spinner aria-label="Loading theme" />
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

  // if (resolvedTheme === 'dark') return (
  //   <div className="flex items-center gap-2">
  //     <Switch
  //       color="primary"
  //       size="md"
  //       isSelected={isSelected}
  //       onValueChange={setIsSelected}
  //     />
  //     <p>{isSelected ? "Dark" : "Light"}</p>
  //   </div>
  // )

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   if (isSelected) {
  //     root.classList.add("dark");
  //   } else {
  //     root.classList.remove("dark");
  //   }
  // }, [isSelected]);


  // return (
  //   <div className="flex items-center gap-2">

  //     {/* DarkMode */}
  //     <Switch
  //       color="primary"
  //       size="md"
  //       isSelected={isSelected}
  //       onValueChange={setIsSelected}
  //     />

  //     <p>{isSelected ? "Dark" : "Light"}</p>
  //   </div>
  // )
}

export default ThemeSwitcher;