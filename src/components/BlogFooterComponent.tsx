import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { label: "GitHub", href: "https://github.com/hibnastiar27", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hibnastiar/", icon: FiLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/nurhibnastiar1/", icon: FiInstagram },
];

const links = [
  { label: "Tulisan", href: "/blog" },
  { label: "Portfolio", href: "/" },
];

export default function BlogFooterComponent() {
  return (
    <footer className="relative mt-24 md:mt-32 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden px-5 sm:px-6">
      <div className="max-w-5xl mx-auto pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-12 md:items-end">
          <div className="flex flex-col items-start gap-6">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-500 dark:text-neutral-400">
              <span className="h-px w-8 bg-pink-500" aria-hidden />
              Arialog Journal
            </p>
            <p className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-tight text-balance text-neutral-900 dark:text-white">
              Terima kasih sudah <span className="italic text-pink-500">membaca.</span>
            </p>
            <p className="max-w-md text-base leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
              Punya pertanyaan, koreksi, atau ide tulisan? Kirim pesan — saya senang ngobrol soal kode dan desain.
            </p>
            <a
              href="mailto:nurhibnastiar@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-neutral-900 hover:bg-pink-500 dark:hover:bg-pink-500 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfcfc] dark:focus-visible:ring-offset-[#0a0a0a]"
            >
              <FiMail aria-hidden />
              Kirim email
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" aria-hidden />
            </a>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <nav aria-label="Tautan footer" className="flex flex-col gap-2 md:items-end">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-2xl text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-pink-500 hover:text-pink-500 dark:hover:border-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-3 border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs text-neutral-500 dark:text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Nur Aria Hibnastiar. Hak cipta dilindungi.</p>
          <p>Dibuat dengan Next.js &amp; Tailwind CSS</p>
        </div>

        {/* Wordmark raksasa */}
        <p
          aria-hidden
          className="mt-8 -mb-[0.1em] select-none whitespace-nowrap text-center font-bold leading-none tracking-tighter text-neutral-200/80 dark:text-neutral-800/70 text-[clamp(3.5rem,17vw,11.5rem)]"
        >
          ARIALOG<span className="text-pink-500/80">.</span>
        </p>
      </div>
    </footer>
  );
}
