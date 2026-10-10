import { posts, type BlogPost } from "@/constants/blogData";

// Versi ringan tanpa isi markdown, untuk dikirim ke client component.
export type BlogPostSummary = Omit<BlogPost, "content">;

export function toSummary(post: BlogPost): BlogPostSummary {
  const { slug, title, excerpt, date, readTime, category, imageUrl } = post;
  return { slug, title, excerpt, date, readTime, category, imageUrl };
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// "5 mnt baca" -> 5
export function readMinutes(post: BlogPostSummary): number {
  return parseInt(post.readTime, 10) || 0;
}

export function archiveNumber(post: BlogPost): string {
  return String(posts.indexOf(post) + 1).padStart(2, "0");
}

// Judul sudah dirender di header halaman, jadi H1 di awal markdown dibuang biar tidak dobel.
export function stripLeadingTitle(markdown: string): string {
  return markdown.trim().replace(/^#\s+.+\n+/, "");
}

export function extractHeadings(markdown: string): TocItem[] {
  const headings: TocItem[] = [];
  // Abaikan baris "#" di dalam code block (misal komentar bash/python)
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, "");
  const regex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(withoutCode)) !== null) {
    const level = match[1].length;
    // Bersihkan format markdown tambahan seperti **bold** atau *italic* dari teks TOC
    const text = match[2].replace(/[*_~`]/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    headings.push({ id, text, level });
  }
  return headings;
}

// Tulisan lain dengan kategori yang sama didahulukan, sisanya diisi tulisan terbaru.
export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const others = posts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
