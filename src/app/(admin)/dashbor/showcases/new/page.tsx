import ShowcaseForm from "@/components/admin/ShowcaseForm";

export default function NewShowcasePage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
        Tambah Showcase
      </h1>
      <ShowcaseForm showcase={null} />
    </div>
  );
}
