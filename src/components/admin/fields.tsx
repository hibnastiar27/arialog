import type { ReactNode } from "react";

const inputClass =
  "w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 outline-none focus:border-pink-500 transition-colors";

const labelClass =
  "text-xs uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400";

export function Field({
  label,
  name,
  defaultValue = "",
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

export function TextArea({
  label,
  name,
  defaultValue = "",
  rows = 4,
  hint,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  hint?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      <textarea
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        className={`${inputClass} resize-y`}
      />
      {hint && <span className="text-xs text-neutral-400">{hint}</span>}
    </label>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity">
      {children}
    </button>
  );
}
