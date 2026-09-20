import ExperienceForm from "@/components/admin/ExperienceForm";

export default function NewExperiencePage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
        Tambah Pengalaman
      </h1>
      <ExperienceForm experience={null} />
    </div>
  );
}
