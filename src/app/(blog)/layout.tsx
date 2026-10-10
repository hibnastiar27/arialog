import BlogNavbarComponent from "@/components/BlogNavbarComponent";
import BlogFooterComponent from "@/components/BlogFooterComponent";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#fcfcfc] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Latar: grid titik + glow pink yang memudar ke bawah */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[640px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.07)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.06)_1px,transparent_0)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute left-1/2 -top-56 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-pink-500/15 dark:bg-pink-500/10 blur-[120px]" />
      </div>

      <BlogNavbarComponent />
      <div className="relative">{children}</div>
      <BlogFooterComponent />
    </div>
  );
}
