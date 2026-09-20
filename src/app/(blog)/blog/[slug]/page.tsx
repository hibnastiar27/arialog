import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/constants/blogData";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(markdown: string): TocItem[] {
  const headings: TocItem[] = [];
  const regex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length;
    // Bersihkan format markdown tambahan seperti **bold** atau *italic* dari teks TOC
    const text = match[2].replace(/[*_~`]/g, ''); 
    const id = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    headings.push({ id, text, level });
  }
  return headings;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const toc = extractHeadings(post.content);

  return (
    <div className="pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors mb-12 group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-medium tracking-widest uppercase">Kembali ke Arsip</span>
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
            <span className="text-xs uppercase tracking-widest text-pink-500 font-medium">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
            <span className="text-xs text-neutral-400 italic font-serif">
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance text-neutral-900 dark:text-neutral-50 mb-8">
            {post.title}
          </h1>

          <div className="aspect-[21/9] w-full relative overflow-hidden rounded-3xl shadow-md mb-16">
            <Image 
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          <main className="prose prose-lg dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-serif prose-p:font-serif prose-a:text-pink-500 hover:prose-a:text-pink-600 prose-img:rounded-3xl max-w-3xl flex-1">
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>
              {post.content}
            </ReactMarkdown>
          </main>

          {toc.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0 sticky top-32">
              <div className="border-l border-neutral-200 dark:border-neutral-800 pl-6 py-2">
                <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-6">
                  Navigator
                </h4>
                <nav className="flex flex-col gap-3">
                  {toc.map((item, index) => {
                    // Hitung level terkecil yang ada di TOC (misal: jika ada H1, minLevel = 1. Jika teks dimulai dari H2, minLevel = 2)
                    const minLevel = Math.min(...toc.map(t => t.level));
                    const indentLevel = item.level - minLevel;
                    
                    let indentClass = 'ml-0';
                    if (indentLevel === 1) indentClass = 'ml-4';
                    if (indentLevel === 2) indentClass = 'ml-8';
                    if (indentLevel === 3) indentClass = 'ml-12';
                    if (indentLevel >= 4) indentClass = 'ml-16';

                    const textStyle = indentLevel === 0 
                      ? 'font-semibold text-neutral-900 dark:text-neutral-100 mt-2' 
                      : indentLevel === 1 
                      ? 'font-medium text-neutral-700 dark:text-neutral-300' 
                      : 'text-neutral-500 dark:text-neutral-500';

                    return (
                      <a 
                        key={index} 
                        href={`#${item.id}`}
                        className={`text-sm leading-relaxed hover:text-pink-500 transition-colors ${indentClass} ${textStyle}`}
                      >
                        {item.text}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
