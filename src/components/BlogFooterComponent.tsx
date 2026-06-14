"use client";

import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

export default function BlogFooterComponent() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#fbfbfb] dark:bg-neutral-950 mt-32 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif italic text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Journal.
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-serif italic">
            Thoughts on code, design, and the art of creation.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm tracking-widest uppercase font-medium text-neutral-900 dark:text-neutral-100">
            Stay Updated
          </p>
          <div className="flex gap-2 w-full max-w-sm">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full px-4 py-2 text-sm rounded-l-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
            />
            <button className="px-6 py-2 text-sm uppercase tracking-widest rounded-r-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              Join
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-neutral-400 dark:text-neutral-500">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FiTwitter size={20} /></a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FiGithub size={20} /></a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FiLinkedin size={20} /></a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs tracking-widest uppercase text-neutral-400">
        &copy; {new Date().getFullYear()} Arialog. All rights reserved.
      </div>
    </footer>
  );
}
