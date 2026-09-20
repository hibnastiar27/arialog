import { loginAction } from "@/lib/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-neutral-50 dark:bg-neutral-950">
      <form
        action={loginAction}
        className="w-full max-w-sm p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
      >
        <h1 className="text-2xl font-serif italic font-bold text-neutral-900 dark:text-white mb-1">
          CMS Arialog
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Masuk untuk mengelola konten portfolio.
        </p>

        <label className="block text-xs uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400 mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          autoFocus
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:border-pink-500 transition-colors"
          placeholder="••••••••"
        />

        {error && (
          <p className="mt-3 text-sm text-pink-500">Password salah, coba lagi.</p>
        )}

        <button className="mt-6 w-full py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:opacity-90 transition-opacity">
          Masuk
        </button>
      </form>
    </main>
  );
}
