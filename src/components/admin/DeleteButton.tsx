"use client";

export default function DeleteButton({
  action,
  id,
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
}) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        onClick={(e) => {
          if (!window.confirm("Hapus item ini? Tindakan ini tidak bisa dibatalkan.")) {
            e.preventDefault();
          }
        }}
        className="px-3 py-1.5 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
      >
        Hapus
      </button>
    </form>
  );
}
