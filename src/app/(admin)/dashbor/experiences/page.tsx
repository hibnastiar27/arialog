import Link from "next/link";
import { prisma } from "@/lib/db";
import { deleteExperience } from "@/lib/actions";

export default async function ExperiencesPage() {
  const items = await prisma.experience.findMany({ orderBy: { order: "asc" } });

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Pengalaman</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{items.length} item</p>
        </div>
        <Link
          href="/dashbor/experiences/new"
          className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          + Tambah
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
          >
            <div className="min-w-0">
              <p className="font-medium text-neutral-900 dark:text-white truncate">{item.titleEn}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                {item.institution} · {item.date}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/dashbor/experiences/${item.id}`}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Edit
              </Link>
              <form action={deleteExperience}>
                <input type="hidden" name="id" value={item.id} />
                <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10 transition-colors">
                  Hapus
                </button>
              </form>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Belum ada data pengalaman.</p>
        )}
      </div>
    </div>
  );
}
