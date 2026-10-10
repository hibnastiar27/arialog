import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { posts } from "@/constants/blogData";
import {
  archiveNumber,
  extractHeadings,
  getPostBySlug,
  getRelatedPosts,
  stripLeadingTitle,
} from "@/lib/blog";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} · Aria[log]`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = stripLeadingTitle(post.content);
  const toc = extractHeadings(content);
  const related = getRelatedPosts(post);

  return (
    <>
      <ReadingProgress />

      <article className="pt-28 sm:pt-36 px-5 sm:px-6">
        {/* Header */}
        <header className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-3.5 py-1.5 font-medium text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" aria-hidden />
              Journal
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700" aria-hidden>/</span>
            <span className="rounded-full bg-pink-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
              {post.category}
            </span>
          </nav>

          <div className="mt-8 md:mt-10 flex items-start gap-6">
            <h1 className="flex-1 font-serif text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-neutral-900 dark:text-white">
              {post.title}
            </h1>
            <span aria-hidden className="hidden md:block font-serif italic text-7xl leading-none text-neutral-200 dark:text-neutral-800 select-none">
              {archiveNumber(post)}
            </span>
          </div>

          <p className="mt-6 max-w-3xl font-serif italic text-xl md:text-2xl leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
            {post.excerpt}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-y border-neutral-200 dark:border-neutral-800 py-5">
            <div className="flex items-center gap-3">
              <Image
                src="/img/profile.png"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-full object-cover ring-2 ring-pink-500/30"
              />
              <div className="leading-tight">
                <p className="font-semibold text-neutral-900 dark:text-white">Nur Aria Hibnastiar</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Backend Developer</p>
              </div>
            </div>
            <dl className="flex gap-8 text-sm">
              <div className="flex flex-col gap-0.5">
                <dt className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400">Terbit</dt>
                <dd className="font-medium text-neutral-900 dark:text-white">{post.date}</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400">Waktu baca</dt>
                <dd className="font-medium text-neutral-900 dark:text-white">{post.readTime}</dd>
              </div>
            </dl>
          </div>
        </header>

        {/* Cover */}
        <figure className="max-w-6xl mx-auto mt-10 md:mt-14">
          <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[2rem] bg-neutral-200 dark:bg-neutral-800 shadow-2xl shadow-neutral-900/10 dark:shadow-black/40">
            <Image src={post.imageUrl} alt={post.title} fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" />
          </div>
        </figure>

        {/* Body */}
        <div className="max-w-5xl mx-auto mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_14rem] gap-12 lg:gap-16 items-start">
          <div className="min-w-0">
            {toc.length > 0 && (
              <details className="group lg:hidden mb-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 [&::-webkit-details-marker]:hidden">
                  Daftar isi
                  <span className="text-lg leading-none transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden>+</span>
                </summary>
                <div className="mt-4">
                  <TableOfContents items={toc} />
                </div>
              </details>
            )}

            <div className="article-prose prose prose-lg prose-neutral dark:prose-invert max-w-[44rem] prose-headings:scroll-mt-28 prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-p:font-serif prose-p:leading-[1.8] prose-li:font-serif prose-li:marker:text-pink-500 prose-a:text-pink-600 dark:prose-a:text-pink-400 prose-a:underline-offset-4 prose-a:decoration-pink-500/40 hover:prose-a:decoration-pink-500 prose-blockquote:border-l-4 prose-blockquote:border-pink-500 prose-blockquote:font-serif prose-blockquote:text-2xl prose-blockquote:font-normal prose-blockquote:leading-snug prose-blockquote:text-neutral-900 dark:prose-blockquote:text-white prose-pre:rounded-2xl prose-pre:border prose-pre:border-neutral-800 prose-pre:bg-neutral-950 prose-img:rounded-3xl">
              <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
            </div>

            {/* Akhir artikel */}
            <div className="mt-16 flex items-center gap-4 text-pink-500 max-w-[44rem]" aria-hidden>
              <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              <span className="font-serif italic text-2xl">fin.</span>
              <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Author card */}
            <aside className="relative mt-12 max-w-[44rem] overflow-hidden rounded-[2rem] bg-neutral-950 dark:bg-neutral-900 dark:ring-1 dark:ring-white/10 p-8 sm:p-10 text-white">
              <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-pink-500/30 blur-3xl" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                <Image
                  src="/img/profile.png"
                  alt=""
                  width={72}
                  height={72}
                  className="size-[72px] rounded-full object-cover ring-4 ring-white/10"
                />
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-pink-400">Ditulis oleh</p>
                  <p className="mt-1 font-serif text-2xl">Nur Aria Hibnastiar</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 text-pretty">
                    Backend developer yang suka menulis tentang kode, desain, dan proses belajar di antaranya.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 self-start sm:self-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-pink-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  Portfolio
                  <FiArrowUpRight aria-hidden />
                </Link>
              </div>
            </aside>
          </div>

          {toc.length > 0 && (
            <aside className="hidden lg:block sticky top-28">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Di artikel ini
              </p>
              <TableOfContents items={toc} />
            </aside>
          )}
        </div>
      </article>

      {/* Baca selanjutnya */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="px-5 sm:px-6 mt-24 md:mt-32">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-neutral-900 dark:border-neutral-100 pb-4">
              <h2 id="related-heading" className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                Baca selanjutnya
              </h2>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                Semua tulisan
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((item) => (
                <article key={item.slug} className="group relative flex flex-col gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span aria-hidden className="absolute left-4 top-3 font-serif italic text-5xl leading-none text-white/80 drop-shadow-lg">
                      {archiveNumber(item)}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="rounded-full bg-pink-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                    <span className="size-1 rounded-full bg-neutral-300 dark:bg-neutral-700" aria-hidden />
                    <span className="font-serif italic">{item.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-balance text-neutral-900 dark:text-white transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400">
                    <Link href={`/blog/${item.slug}`} className="focus-visible:outline-none">
                      <span className="absolute inset-0 z-10 rounded-2xl group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-pink-500 group-has-[:focus-visible]:ring-offset-4 group-has-[:focus-visible]:ring-offset-[#fcfcfc] dark:group-has-[:focus-visible]:ring-offset-[#0a0a0a]" aria-hidden />
                      {item.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
