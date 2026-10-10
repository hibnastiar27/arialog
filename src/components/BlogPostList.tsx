"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowUpRight, FiSearch, FiX } from "react-icons/fi";
import type { BlogPostSummary } from "@/lib/blog";

const ALL_CATEGORY = "Semua";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfcfc] dark:focus-visible:ring-offset-[#0a0a0a]";

export default function BlogPostList({ posts }: { posts: BlogPostSummary[] }) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return [{ name: ALL_CATEGORY, count: posts.length }, ...Array.from(counts, ([name, count]) => ({ name, count }))];
  }, [posts]);

  const normalizedQuery = query.trim().toLowerCase();
  const isFiltering = activeCategory !== ALL_CATEGORY || normalizedQuery !== "";

  const filteredPosts = posts.filter((p) => {
    const matchCategory = activeCategory === ALL_CATEGORY || p.category === activeCategory;
    const matchQuery =
      normalizedQuery === "" ||
      `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(normalizedQuery);
    return matchCategory && matchQuery;
  });

  const featuredPost = isFiltering ? undefined : filteredPosts[0];
  const listPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  // Nomor arsip tetap sama walau difilter, biar "No. 03" selalu tulisan yang sama.
  const numberOf = (post: BlogPostSummary) => String(posts.indexOf(post) + 1).padStart(2, "0");

  const resetFilters = () => {
    setActiveCategory(ALL_CATEGORY);
    setQuery("");
  };

  return (
    <div className="flex flex-col gap-14 md:gap-20">
      {/* Toolbar: kategori + pencarian */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 border-y border-neutral-200 dark:border-neutral-800 py-4">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori">
          {categories.map(({ name, count }) => {
            const isActive = name === activeCategory;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActiveCategory(name)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${focusRing} ${
                  isActive
                    ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                    : "bg-white/60 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {name}
                <span
                  className={`text-[11px] tabular-nums ${
                    isActive ? "text-pink-300 dark:text-pink-600" : "text-neutral-400 dark:text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <label className="relative block w-full md:w-72">
          <span className="sr-only">Cari tulisan</span>
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari tulisan…"
            className="w-full rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 py-2.5 pl-11 pr-10 text-base sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 transition-colors focus:border-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/40 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Hapus pencarian"
              className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center size-7 rounded-full text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <FiX />
            </button>
          )}
        </label>
      </div>

      {/* Featured — poster full-bleed */}
      {featuredPost && (
        <article className="group relative isolate flex min-h-[520px] lg:min-h-[560px] flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-2xl shadow-neutral-900/10 dark:shadow-black/40">
          <Image
            src={featuredPost.imageUrl}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="-z-10 object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/10" />
          <div aria-hidden className="absolute inset-0 -z-10 hidden md:block bg-gradient-to-r from-neutral-950/80 via-neutral-950/30 to-transparent" />

          <div className="absolute top-5 inset-x-5 sm:top-7 sm:inset-x-7 flex items-start justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <span className="size-1.5 rounded-full bg-white" aria-hidden />
              Terbaru
            </span>
            <span aria-hidden className="font-serif italic text-6xl sm:text-7xl leading-none text-white/20 select-none">
              {numberOf(featuredPost)}
            </span>
          </div>

          <div className="flex max-w-2xl flex-col gap-5 p-6 sm:p-10 md:p-12">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/25 px-3 py-1 uppercase tracking-[0.2em] text-[10px] font-semibold text-white">
                {featuredPost.category}
              </span>
              <span>{featuredPost.date}</span>
              <span className="size-1 rounded-full bg-white/40" aria-hidden />
              <span className="font-serif italic">{featuredPost.readTime}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-tight text-balance">
              <Link href={`/blog/${featuredPost.slug}`} className="focus-visible:outline-none">
                <span className="absolute inset-0 z-10 rounded-[2rem] group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-pink-500 group-has-[:focus-visible]:ring-inset" aria-hidden />
                {featuredPost.title}
              </Link>
            </h2>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-pretty text-white/75 line-clamp-3">
              {featuredPost.excerpt}
            </p>

            <span className="mt-1 inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:gap-3">
              Baca tulisan
              <FiArrowRight aria-hidden />
            </span>
          </div>
        </article>
      )}

      {/* Index — daftar bernomor */}
      {listPosts.length > 0 && (
        <section aria-labelledby="blog-index-heading">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h2
              id="blog-index-heading"
              className="text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-500 dark:text-neutral-400"
            >
              {isFiltering ? "Hasil" : "Arsip Tulisan"}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 tabular-nums" aria-live="polite">
              {filteredPosts.length} tulisan
            </p>
          </div>

          <ol className="border-t border-neutral-900 dark:border-neutral-100">
            {listPosts.map((post) => {
              const number = numberOf(post);
              return (
                <li key={post.slug} className="border-b border-neutral-200 dark:border-neutral-800">
                  <article className="group relative grid grid-cols-1 gap-5 py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)_11rem] sm:items-center sm:gap-8 md:grid-cols-[6.5rem_minmax(0,1fr)_15rem] md:py-10">
                    <span
                      aria-hidden
                      className="hidden sm:block font-serif italic text-6xl md:text-7xl leading-none tabular-nums text-neutral-200 dark:text-neutral-800 transition-colors duration-300 group-hover:text-pink-500"
                    >
                      {number}
                    </span>

                    <div className="relative aspect-[16/9] sm:order-last sm:aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={post.imageUrl}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                      <span aria-hidden className="sm:hidden absolute bottom-3 left-4 font-serif italic text-5xl leading-none text-white drop-shadow-lg">
                        {number}
                      </span>
                      <span
                        aria-hidden
                        className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white text-neutral-900 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 motion-reduce:transition-none"
                      >
                        <FiArrowUpRight />
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="rounded-full bg-pink-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span className="size-1 rounded-full bg-neutral-300 dark:bg-neutral-700" aria-hidden />
                        <span className="font-serif italic">{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight text-balance text-neutral-900 dark:text-white transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-pink-400">
                        <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none">
                          <span className="absolute inset-0 z-10 rounded-2xl group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-pink-500" aria-hidden />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </section>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-dashed border-neutral-300 dark:border-neutral-700 px-6 py-20 text-center">
          <p className="font-serif italic text-6xl text-neutral-300 dark:text-neutral-700" aria-hidden>
            ∅
          </p>
          <p className="font-serif text-2xl text-neutral-900 dark:text-white">Belum ada tulisan yang cocok.</p>
          <p className="max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
            Coba kata kunci lain atau lihat semua kategori.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className={`mt-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-pink-500 dark:bg-white dark:text-neutral-900 dark:hover:bg-pink-500 dark:hover:text-white ${focusRing}`}
          >
            Reset filter
          </button>
        </div>
      )}
    </div>
  );
}
