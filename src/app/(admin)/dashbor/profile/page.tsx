import { prisma } from "@/lib/db";
import { saveProfile } from "@/lib/actions";
import { TextArea, SubmitButton } from "@/components/admin/fields";
import FileUploadField from "@/components/admin/FileUploadField";

export default async function ProfilePage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Profile</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 mb-6">
        Data utama yang tampil di halaman utama.
      </p>

      <form action={saveProfile} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FileUploadField
            label="Foto Profile"
            name="photoFile"
            currentUrl={profile?.urlImg ?? ""}
            urlFieldName="urlImg"
            kind="image"
            accept="image/*"
          />
          <FileUploadField
            label="Resume (PDF)"
            name="resumeFile"
            currentUrl={profile?.resumeUrl ?? ""}
            urlFieldName="resumeUrl"
            kind="pdf"
            accept="application/pdf"
          />
        </div>
        <TextArea label="Short Bio (EN)" name="shortBioEn" defaultValue={profile?.shortBioEn} rows={2} />
        <TextArea label="Short Bio (ID)" name="shortBioId" defaultValue={profile?.shortBioId} rows={2} />
        <TextArea label="Deskripsi Panjang (EN)" name="descriptionEn" defaultValue={profile?.descriptionEn} rows={6} />
        <TextArea label="Deskripsi Panjang (ID)" name="descriptionId" defaultValue={profile?.descriptionId} rows={6} />
        <div>
          <SubmitButton>Simpan</SubmitButton>
        </div>
      </form>
    </div>
  );
}
