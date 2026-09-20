import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import EducationForm from "@/components/admin/EducationForm";

export default async function EditEducationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const education = await prisma.education.findUnique({ where: { id } });
  if (!education) notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
        Edit Pendidikan
      </h1>
      <EducationForm education={education} />
    </div>
  );
}
