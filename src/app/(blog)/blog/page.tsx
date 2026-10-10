import type { Metadata } from "next";
import { posts } from "@/constants/blogData";
import { readMinutes, toSummary } from "@/lib/blog";
import BlogPostList from "@/components/BlogPostList";

export const metadata: Metadata = {
  title: "Journal · Aria[log]",
  description:
    "Esai, catatan, dan eksperimen seputar rekayasa perangkat lunak, desain, dan seni visual.",
};

export default function BlogPage() {
  const categoryCount = new Set(posts.map((p) => p.category)).size;
  const totalMinutes = posts.reduce((sum, p) => sum + readMinutes(p), 0);
  const volume = posts[0]?.date.match(/\d{4}/)?.[0];

  const stats = [
    { label: "Tulisan", value: posts.length },
    { label: "Topik", value: categoryCount },
    { label: "Menit baca", value: totalMinutes },
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-8 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-14 md:mb-20">
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-500 dark:text-neutral-400">
            <span className="h-px w-8 bg-pink-500" aria-hidden />
            Arialog Journal{volume && <> — Vol. {volume}</>}
          </p>

          <h1 className="mt-6 font-serif text-5xl sm:text-7xl md:text-8xl font-medium leading-[0.95] tracking-tight text-balance text-neutral-900 dark:text-white">
            Catatan, ide &{" "}
            <span className="relative inline-block italic before:absolute before:-inset-x-2 before:inset-y-1 before:-skew-y-2 before:-skew-x-6 before:bg-pink-500 before:rounded-sm">
              <span className="relative text-white">eksperimen.</span>
            </span>
          </h1>

          <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
              Kumpulan esai, pemikiran, dan refleksi tentang persimpangan antara
              rekayasa perangkat lunak dan seni visual — ditulis sambil belajar.
            </p>

            <dl className="flex gap-8 sm:gap-12 shrink-0">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-4xl md:text-5xl font-medium tabular-nums text-neutral-900 dark:text-white">
                    {String(stat.value).padStart(2, "0")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <BlogPostList posts={posts.map(toSummary)} />
      </div>
    </div>
  );
}
