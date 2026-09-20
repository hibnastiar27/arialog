"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./db";
import { createSession, destroySession, verifyPassword } from "./auth";
import { uploadFile, publicUrl } from "./storage";

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function list(v: FormDataEntryValue | null): string[] {
  return str(v)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function num(v: FormDataEntryValue | null): number {
  const n = parseInt(str(v), 10);
  return Number.isNaN(n) ? 0 : n;
}

function parseMonth(v: FormDataEntryValue | null): Date | null {
  const s = str(v);
  const m = /^(\d{4})-(\d{2})$/.exec(s);
  if (!m) return null;
  return new Date(parseInt(m[1], 10), parseInt(m[2], 10) - 1, 1);
}

async function uploadIfProvided(
  formData: FormData,
  fieldName: string,
  folder: string
): Promise<string | null> {
  const file = formData.get(fieldName);
  if (file && file instanceof File && file.size > 0) {
    const key = await uploadFile(file, folder);
    return publicUrl(key);
  }
  return null;
}

// ---- Auth ----

export async function loginAction(formData: FormData) {
  const password = str(formData.get("password"));
  if (verifyPassword(password)) {
    await createSession();
    redirect("/dashbor");
  }
  redirect("/login?error=1");
}

export async function logoutAction() {
  await destroySession();
  redirect("/login");
}

// ---- Profile ----

export async function saveProfile(formData: FormData) {
  const photoUrl = await uploadIfProvided(formData, "photoFile", "profile");
  const resumeUrl = await uploadIfProvided(formData, "resumeFile", "resume");
  const data = {
    urlImg: photoUrl ?? str(formData.get("urlImg")),
    resumeUrl: resumeUrl ?? str(formData.get("resumeUrl")),
    shortBioEn: str(formData.get("shortBioEn")),
    shortBioId: str(formData.get("shortBioId")),
    descriptionEn: str(formData.get("descriptionEn")),
    descriptionId: str(formData.get("descriptionId")),
  };
  await prisma.profile.upsert({
    where: { id: 1 },
    update: data,
    create: { id: 1, ...data },
  });
  revalidatePath("/");
  redirect("/dashbor/profile");
}

// ---- Education ----

export async function saveEducation(formData: FormData) {
  const id = str(formData.get("id"));
  const imageUrl = await uploadIfProvided(formData, "imageFile", "education");
  const data = {
    titleEn: str(formData.get("titleEn")),
    titleId: str(formData.get("titleId")),
    institution: str(formData.get("institution")),
    startDate: parseMonth(formData.get("startDate")),
    endDate: parseMonth(formData.get("endDate")),
    descriptionEn: list(formData.get("descriptionEn")),
    descriptionId: list(formData.get("descriptionId")),
    imageUrl: imageUrl ?? str(formData.get("imageUrl")),
    order: num(formData.get("order")),
  };
  if (id) {
    await prisma.education.update({ where: { id }, data });
  } else {
    await prisma.education.create({ data });
  }
  revalidatePath("/");
  redirect("/dashbor/educations");
}

export async function deleteEducation(formData: FormData) {
  const id = str(formData.get("id"));
  if (id) await prisma.education.delete({ where: { id } });
  revalidatePath("/");
  redirect("/dashbor/educations");
}

// ---- Experience ----

export async function saveExperience(formData: FormData) {
  const id = str(formData.get("id"));
  const imageUrl = await uploadIfProvided(formData, "imageFile", "experience");
  const data = {
    titleEn: str(formData.get("titleEn")),
    titleId: str(formData.get("titleId")),
    institution: str(formData.get("institution")),
    startDate: parseMonth(formData.get("startDate")),
    endDate: parseMonth(formData.get("endDate")),
    descriptionEn: list(formData.get("descriptionEn")),
    descriptionId: list(formData.get("descriptionId")),
    linkSertifikat: str(formData.get("linkSertifikat")),
    imageUrl: imageUrl ?? str(formData.get("imageUrl")),
    order: num(formData.get("order")),
  };
  if (id) {
    await prisma.experience.update({ where: { id }, data });
  } else {
    await prisma.experience.create({ data });
  }
  revalidatePath("/");
  redirect("/dashbor/experiences");
}

export async function deleteExperience(formData: FormData) {
  const id = str(formData.get("id"));
  if (id) await prisma.experience.delete({ where: { id } });
  revalidatePath("/");
  redirect("/dashbor/experiences");
}

// ---- Showcase ----

export async function saveShowcase(formData: FormData) {
  const id = str(formData.get("id"));
  const urlImg = await uploadIfProvided(formData, "imageFile", "showcase");
  const data = {
    titleEn: str(formData.get("titleEn")),
    titleId: str(formData.get("titleId")),
    slug: str(formData.get("slug")),
    kategoriEn: str(formData.get("kategoriEn")),
    kategoriId: str(formData.get("kategoriId")),
    techStack: list(formData.get("techStack")),
    linkDemo: str(formData.get("linkDemo")),
    linkGithub: str(formData.get("linkGithub")),
    urlImg: urlImg ?? str(formData.get("urlImg")),
    descriptionEn: str(formData.get("descriptionEn")),
    descriptionId: str(formData.get("descriptionId")),
    order: num(formData.get("order")),
  };
  if (id) {
    await prisma.showcase.update({ where: { id: parseInt(id, 10) }, data });
  } else {
    await prisma.showcase.create({ data });
  }
  revalidatePath("/");
  redirect("/dashbor/showcases");
}

export async function deleteShowcase(formData: FormData) {
  const id = str(formData.get("id"));
  if (id) await prisma.showcase.delete({ where: { id: parseInt(id, 10) } });
  revalidatePath("/");
  redirect("/dashbor/showcases");
}
