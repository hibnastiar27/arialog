"use client";

import { useEffect, useRef, useState } from "react";

export default function FileUploadField({
  label,
  name,
  currentUrl,
  urlFieldName,
  kind,
  accept,
}: {
  label: string;
  name: string;
  currentUrl: string;
  urlFieldName: string;
  kind: "image" | "pdf";
  accept?: string;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const file = e.target.files?.[0];
    objectUrlRef.current = file ? URL.createObjectURL(file) : null;
    setPreviewUrl(objectUrlRef.current);
  }

  const shownUrl = previewUrl ?? currentUrl;

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </span>

      <input type="hidden" name={urlFieldName} value={currentUrl} />

      <div className="flex items-start gap-4">
        <div className="w-32 h-24 shrink-0 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 overflow-hidden flex items-center justify-center">
          {kind === "image" && shownUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={shownUrl} alt={label} className="w-full h-full object-cover" />
          ) : kind === "pdf" && shownUrl ? (
            <iframe src={shownUrl} title={label} className="w-full h-full" />
          ) : (
            <span className="text-xs text-neutral-400 text-center px-2">Belum ada file</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="file"
            name={name}
            accept={accept}
            onChange={handleChange}
            className="text-base text-neutral-600 dark:text-neutral-300 file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-neutral-900 file:text-white dark:file:bg-white dark:file:text-neutral-900 file:text-sm file:font-medium"
          />
          {currentUrl && (
            <a
              href={currentUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-pink-500 hover:underline break-all"
            >
              Buka file saat ini ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
