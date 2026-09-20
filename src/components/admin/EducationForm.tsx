import type { Education } from "@prisma/client";
import Link from "next/link";
import { saveEducation } from "@/lib/actions";
import { Field, TextArea, SubmitButton, toMonthInput } from "./fields";
import FileUploadField from "./FileUploadField";

export default function EducationForm({
  education,
}: {
  education: Education | null;
}) {
  return (
    <form action={saveEducation} className="flex flex-col gap-5 max-w-2xl">
      {education && <input type="hidden" name="id" value={education.id} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Judul (EN)" name="titleEn" defaultValue={education?.titleEn} required />
        <Field label="Judul (ID)" name="titleId" defaultValue={education?.titleId} required />
        <Field label="Institusi" name="institution" defaultValue={education?.institution} required />
        <Field label="Mulai" name="startDate" type="month" defaultValue={toMonthInput(education?.startDate)} required />
        <Field label="Selesai" name="endDate" type="month" defaultValue={toMonthInput(education?.endDate)} />
      </div>

      <FileUploadField
        label="Gambar"
        name="imageFile"
        currentUrl={education?.imageUrl ?? ""}
        urlFieldName="imageUrl"
        kind="image"
        accept="image/*"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextArea
          label="Deskripsi (EN)"
          name="descriptionEn"
          defaultValue={education?.descriptionEn.join("\n")}
          hint="Satu poin per baris"
        />
        <TextArea
          label="Deskripsi (ID)"
          name="descriptionId"
          defaultValue={education?.descriptionId.join("\n")}
          hint="Satu poin per baris"
        />
      </div>

      <Field label="Urutan" name="order" type="number" defaultValue={String(education?.order ?? 0)} />

      <div className="flex items-center gap-3">
        <SubmitButton>Simpan</SubmitButton>
        <Link href="/dashbor/educations" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
          Batal
        </Link>
      </div>
    </form>
  );
}
