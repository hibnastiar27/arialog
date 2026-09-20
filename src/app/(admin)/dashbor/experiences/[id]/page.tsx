import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import ExperienceForm from "@/components/admin/ExperienceForm";

export default async function EditExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = await prisma.experience.findUnique({ where: { id } });
  if (!experience) notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
        Edit Pengalaman
      </h1>
      <ExperienceForm experience={experience} />
    </div>
  );
}
