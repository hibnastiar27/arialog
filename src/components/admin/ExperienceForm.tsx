import type { Experience } from "@prisma/client";
import Link from "next/link";
import { saveExperience } from "@/lib/actions";
import { Field, TextArea, SubmitButton, toMonthInput } from "./fields";
import FileUploadField from "./FileUploadField";

export default function ExperienceForm({
  experience,
}: {
  experience: Experience | null;
}) {
  return (
    <form action={saveExperience} className="flex flex-col gap-5 max-w-2xl">
      {experience && <input type="hidden" name="id" value={experience.id} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Judul (EN)" name="titleEn" defaultValue={experience?.titleEn} required />
        <Field label="Judul (ID)" name="titleId" defaultValue={experience?.titleId} required />
        <Field label="Institusi" name="institution" defaultValue={experience?.institution} required />
        <Field label="Mulai" name="startDate" type="month" defaultValue={toMonthInput(experience?.startDate)} required />
        <Field
          label="Selesai (kosongkan jika masih berlangsung)"
          name="endDate"
          type="month"
          defaultValue={toMonthInput(experience?.endDate)}
        />
      </div>

      <Field
        label="Link Sertifikat"
        name="linkSertifikat"
        defaultValue={experience?.linkSertifikat}
        placeholder="https://..."
      />
      <FileUploadField
        label="Gambar"
        name="imageFile"
        currentUrl={experience?.imageUrl ?? ""}
        urlFieldName="imageUrl"
        kind="image"
        accept="image/*"
        hint="Rasio 16:9 (landscape) • minimal 1280×720px"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextArea
          label="Deskripsi (EN)"
          name="descriptionEn"
          defaultValue={experience?.descriptionEn.join("\n")}
          hint="Satu poin per baris"
        />
        <TextArea
          label="Deskripsi (ID)"
          name="descriptionId"
          defaultValue={experience?.descriptionId.join("\n")}
          hint="Satu poin per baris"
        />
      </div>

      <Field label="Urutan" name="order" type="number" defaultValue={String(experience?.order ?? 0)} />

      <div className="flex items-center gap-3">
        <SubmitButton>Simpan</SubmitButton>
        <Link href="/dashbor/experiences" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
          Batal
        </Link>
      </div>
    </form>
  );
}
