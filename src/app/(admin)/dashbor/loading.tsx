export default function Loading() {
  return (
    <div className="flex items-center justify-center py-40">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-neutral-200 dark:border-neutral-800 border-t-pink-500 animate-spin" />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Memuat data...</p>
      </div>
    </div>
  );
}
