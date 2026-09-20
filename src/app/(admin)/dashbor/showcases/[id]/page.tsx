import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import ShowcaseForm from "@/components/admin/ShowcaseForm";

export default async function EditShowcasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const showcase = await prisma.showcase.findUnique({
    where: { id: parseInt(id, 10) },
  });
  if (!showcase) notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
        Edit Showcase
      </h1>
      <ShowcaseForm showcase={showcase} />
    </div>
  );
}
