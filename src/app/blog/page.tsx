import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const posts = [
  {
    id: 1,
    title: 'Understanding React Server Components',
    excerpt: 'Learn how React Server Components change the way we build React applications and improve performance.',
    date: 'June 10, 2026',
    readTime: '5 min read',
    category: 'React',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS Transitions',
    excerpt: 'A deep dive into creating smooth, elegant, and performant animations using Tailwind CSS utility classes.',
    date: 'June 5, 2026',
    readTime: '7 min read',
    category: 'CSS',
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    excerpt: 'Exploring the upcoming trends, frameworks, and technologies shaping the web development ecosystem.',
    date: 'May 28, 2026',
    readTime: '10 min read',
    category: 'Tech',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 px-6 py-24 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Blog.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Thoughts, learnings, and stories about web development, design, and life.
          </p>
        </header>

        <main className="flex flex-col gap-16">
          {posts.map((post) => (
            <article key={post.id} className="group relative flex flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-sm mb-4">
                <time dateTime={post.date} className="text-neutral-500 dark:text-neutral-400">
                  {post.date}
                </time>
                <span className="text-neutral-300 dark:text-neutral-700">&middot;</span>
                <span className="text-neutral-500 dark:text-neutral-400">{post.readTime}</span>
                <span className="relative z-10 rounded-full bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1 font-medium text-neutral-600 dark:text-neutral-300 text-xs">
                  {post.category}
                </span>
              </div>
              <div className="group relative w-full">
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-200">
                  <Link href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-200">
                Read more <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
