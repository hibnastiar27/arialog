export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-[60%]">
            <div className="h-10 w-56 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="space-y-3 w-full max-w-lg">
              <div className="h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
              <div className="h-8 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
              <div className="h-6 w-2/3 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            </div>
            <div className="h-14 w-44 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          </div>
          <div className="w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>
      </div>

      {/* About skeleton */}
      <div className="max-w-screen-xl mx-auto px-6 pt-20 pb-24">
        <div className="h-10 w-64 mb-12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-64 rounded-3xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="h-64 rounded-3xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        </div>
      </div>

      {/* Showcase skeleton */}
      <div className="max-w-screen-xl mx-auto px-6 pb-32">
        <div className="h-10 w-56 mb-12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-56 rounded-3xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
