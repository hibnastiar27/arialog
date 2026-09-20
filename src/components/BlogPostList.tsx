"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import type { BlogPost } from "@/constants/blogData";

const ALL_CATEGORY = "Semua";

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  const categories = [ALL_CATEGORY, ...Array.from(new Set(posts.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const filteredPosts =
    activeCategory === ALL_CATEGORY
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = activeCategory === ALL_CATEGORY ? filteredPosts[0] : undefined;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <main className="flex flex-col gap-16">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium border transition-all duration-300 ${
                isActive
                  ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white shadow-sm"
                  : "bg-transparent text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Featured Post — split panel */}
      {featuredPost && (
        <article className="group grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden">
          <div className="flex flex-col justify-center gap-5 p-8 md:p-14 bg-neutral-950 dark:bg-neutral-900">
            <span className="self-start px-3 py-1 rounded-full bg-pink-500 text-white text-[10px] uppercase tracking-widest font-medium">
              {featuredPost.category}
            </span>
            <h3 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-white group-hover:text-pink-300 transition-colors duration-300">
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h3>
            <p className="text-base leading-relaxed text-white/70 font-serif line-clamp-3">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-3 text-white/50">
              <span className="text-[10px] uppercase tracking-widest font-medium">
                {featuredPost.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span className="text-xs italic font-serif">{featuredPost.readTime}</span>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex items-center gap-2 self-start mt-2 px-6 py-3 rounded-full bg-pink-500 text-white text-xs uppercase tracking-widest font-semibold hover:bg-pink-600 hover:gap-3 transition-all duration-300"
            >
              Baca Tulisan
              <FiArrowRight />
            </Link>
          </div>
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-full min-h-[260px]">
            <Image
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </article>
      )}

      {/* Posts Grid — poster style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gridPosts.map((post, index) => (
          <article key={post.slug} className="group relative w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-pink-500 text-white text-[10px] uppercase tracking-widest font-medium">
                {post.category}
              </span>
              <span className="absolute top-3 right-5 font-serif italic text-5xl md:text-6xl text-white/25 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-start gap-3">
                <div className="flex items-center gap-3 text-white/60">
                  <span className="text-[10px] uppercase tracking-widest font-medium">
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40"></span>
                  <span className="text-xs italic font-serif">{post.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight text-white group-hover:text-pink-300 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0 z-10" />
                    {post.title}
                  </Link>
                </h3>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-pink-300">
                  Baca Tulisan
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
