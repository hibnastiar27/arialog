'use client'

import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const FooterGradient = () => {
  return (
    <footer className="w-full bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
              ARIALOG<span className="text-pink-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              A creative developer passionate about building elegant, functional, and user-centric digital experiences. 
              Always eager to learn and explore new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:pl-12">
            <h3 className="text-neutral-900 dark:text-neutral-50 font-semibold tracking-wide uppercase text-sm">
              Explore
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-neutral-900 dark:text-neutral-50 font-semibold tracking-wide uppercase text-sm">
              Connect
            </h3>
            <p className="text-sm mb-2">
              Feel free to reach out if you want to build something together, or just say hi!
            </p>
            <div className="flex items-center gap-5">
              <a 
                href="https://www.instagram.com/nurhibnastiar1/" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-500 hover:text-pink-500 dark:text-neutral-400 dark:hover:text-pink-400 transition-transform hover:-translate-y-1 duration-200"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hibnastiar/" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-500 hover:text-pink-500 dark:text-neutral-400 dark:hover:text-pink-400 transition-transform hover:-translate-y-1 duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:nurhibnastiar@gmail.com" 
                className="text-neutral-500 hover:text-pink-500 dark:text-neutral-400 dark:hover:text-pink-400 transition-transform hover:-translate-y-1 duration-200"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Nur Aria Hibnastiar. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-pink-500">&hearts;</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterGradient