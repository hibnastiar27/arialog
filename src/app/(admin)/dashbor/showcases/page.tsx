import Link from "next/link";
import { prisma } from "@/lib/db";
import { deleteShowcase } from "@/lib/actions";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function ShowcasesPage() {
  const items = await prisma.showcase.findMany({ orderBy: { order: "asc" } });

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Showcase</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{items.length} proyek</p>
        </div>
        <Link
          href="/dashbor/showcases/new"
          className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          + Tambah
        </Link>
      </div>

      {items.length > 0 ? (
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="min-w-0">
                <p className="font-medium text-neutral-900 dark:text-white truncate">{item.titleEn}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">{item.kategoriEn}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Link
                  href={`/dashbor/showcases/${item.id}`}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Edit
                </Link>
                <DeleteButton action={deleteShowcase} id={String(item.id)} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 p-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Belum ada proyek showcase.</p>
          <Link
            href="/dashbor/showcases/new"
            className="inline-flex px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            + Tambah showcase
          </Link>
        </div>
      )}
    </div>
  );
}
