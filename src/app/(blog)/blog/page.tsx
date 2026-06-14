import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/constants/blogData';

export default function BlogPage() {
  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div className="pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 text-center">
          <p className="tracking-widest uppercase text-xs text-neutral-400 mb-4 font-medium">Arsip</p>
          <h1 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
            Kata & Makna
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-serif italic max-w-2xl mx-auto">
            Kumpulan esai, pemikiran, dan refleksi tentang persimpangan antara rekayasa perangkat lunak dan seni visual.
          </p>
        </header>

        <main className="flex flex-col gap-20">
          {/* Featured Post */}
          {featuredPost && (
            <article className="group relative flex flex-col gap-6 w-full">
              <div className="aspect-[21/9] md:aspect-[2/1] w-full relative overflow-hidden rounded-3xl shadow-sm">
                <Image 
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                    {featuredPost.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span className="text-[10px] uppercase tracking-widest text-pink-500 font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span className="text-xs text-neutral-400 italic font-serif">
                    {featuredPost.readTime}
                  </span>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-neutral-900 dark:text-neutral-50 mb-6 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <span className="absolute inset-0 z-10" />
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-serif max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </div>
            </article>
          )}

          {/* Divider */}
          {restPosts.length > 0 && <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />}

          {/* Rest of Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {restPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col gap-5 relative">
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-3xl shadow-sm">
                  <Image 
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                    <span className="text-[10px] uppercase tracking-widest text-pink-500 font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-medium leading-tight text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0 z-10" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 font-serif line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
