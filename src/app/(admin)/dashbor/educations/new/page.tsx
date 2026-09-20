import EducationForm from "@/components/admin/EducationForm";

export default function NewEducationPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
        Tambah Pendidikan
      </h1>
      <EducationForm education={null} />
    </div>
  );
}
