"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-white dark:bg-[#111]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center"
      >
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-violet-600 mb-4 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
          Page Not Found
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-10 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
        </p>
        
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-lg"
          >
            Return to Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 dark:bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}