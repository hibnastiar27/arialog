'use client'

import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const FooterGradient = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);
  return (
    <footer
      className={`relative w-full py-12  text-center overflow-hidden transition-all ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr opacity-40 transition-all ${isDarkMode
          ? "from-[#111] via-gray-100 to-pink-500"
          : "from-white via-gray-100 to-pink-500"
          }`}
        animate={{
          backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500 opacity-30"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <div className="relative z-10">
        <h1 className='text-6xl font-bold'>ARIALOG.</h1>
        <p className="text-sm">&copy; {new Date().getFullYear()} NUR ARIA HIBNASTIAR. <br /> All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterGradient