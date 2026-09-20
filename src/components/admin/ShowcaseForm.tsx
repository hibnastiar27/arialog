import type { Showcase } from "@prisma/client";
import Link from "next/link";
import { saveShowcase } from "@/lib/actions";
import { Field, TextArea, SubmitButton } from "./fields";
import FileUploadField from "./FileUploadField";

export default function ShowcaseForm({
  showcase,
}: {
  showcase: Showcase | null;
}) {
  return (
    <form action={saveShowcase} className="flex flex-col gap-5 max-w-2xl">
      {showcase && <input type="hidden" name="id" value={String(showcase.id)} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Judul (EN)" name="titleEn" defaultValue={showcase?.titleEn} required />
        <Field label="Judul (ID)" name="titleId" defaultValue={showcase?.titleId} required />
        <Field label="Slug" name="slug" defaultValue={showcase?.slug} required />
        <div className="grid grid-cols-2 gap-5">
          <Field label="Kategori (EN)" name="kategoriEn" defaultValue={showcase?.kategoriEn} />
          <Field label="Kategori (ID)" name="kategoriId" defaultValue={showcase?.kategoriId} />
        </div>
        <Field label="Link Demo" name="linkDemo" defaultValue={showcase?.linkDemo} placeholder="https://..." />
        <Field label="Link GitHub" name="linkGithub" defaultValue={showcase?.linkGithub} placeholder="https://..." />
      </div>

      <FileUploadField
        label="Gambar"
        name="imageFile"
        currentUrl={showcase?.urlImg ?? ""}
        urlFieldName="urlImg"
        kind="image"
        accept="image/*"
      />

      <TextArea
        label="Tech Stack"
        name="techStack"
        defaultValue={showcase?.techStack.join("\n")}
        hint="Satu teknologi per baris"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextArea label="Deskripsi (EN)" name="descriptionEn" defaultValue={showcase?.descriptionEn} />
        <TextArea label="Deskripsi (ID)" name="descriptionId" defaultValue={showcase?.descriptionId} />
      </div>

      <Field label="Urutan" name="order" type="number" defaultValue={String(showcase?.order ?? 0)} />

      <div className="flex items-center gap-3">
        <SubmitButton>Simpan</SubmitButton>
        <Link href="/dashbor/showcases" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
          Batal
        </Link>
      </div>
    </form>
  );
}
