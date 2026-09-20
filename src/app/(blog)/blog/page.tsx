import React from "react";
import { posts } from "@/constants/blogData";
import BlogPostList from "@/components/BlogPostList";

export default function BlogPage() {
  return (
    <div className="pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 text-center">
          <p className="tracking-widest uppercase text-xs text-neutral-400 mb-4 font-medium">
            Arsip
          </p>
          <h1 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight text-balance text-neutral-900 dark:text-neutral-50 mb-6">
            Kata & Makna
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-serif italic text-pretty max-w-2xl mx-auto">
            Kumpulan esai, pemikiran, dan refleksi tentang persimpangan antara
            rekayasa perangkat lunak dan seni visual.
          </p>
        </header>

        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}
