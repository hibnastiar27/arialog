import { PrismaClient } from "@prisma/client";
import { dataAboutMe, dataDescriptions, dataShowcase } from "../src/constants/data";
import { buildEducationData, buildExperienceData } from "./content";

const prisma = new PrismaClient();

async function main() {
  const existingProfile = await prisma.profile.findFirst();
  if (existingProfile) {
    console.log("Database sudah berisi data. Seed dilewati (hapus data dulu untuk re-seed).");
    return;
  }

  await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      urlImg: dataAboutMe.url_img,
      resumeUrl: dataAboutMe.resumeUrl,
      shortBioEn: dataAboutMe.short_bio.en,
      shortBioId: dataAboutMe.short_bio.id,
      descriptionEn: dataDescriptions.en,
      descriptionId: dataDescriptions.id,
    },
  });

  await prisma.education.createMany({ data: buildEducationData() });
  await prisma.experience.createMany({ data: buildExperienceData() });

  await prisma.showcase.createMany({
    data: dataShowcase.en.map((item, i) => ({
      titleEn: item.title,
      titleId: dataShowcase.id[i].title,
      slug: item.slug,
      kategoriEn: item.kategori,
      kategoriId: dataShowcase.id[i].kategori,
      techStack: item.tech_stack,
      linkDemo: item.link_demo,
      linkGithub: item.link_github,
      urlImg: item.url_img,
      descriptionEn: item.description,
      descriptionId: dataShowcase.id[i].description,
      order: i,
    })),
  });

  console.log("Seed selesai: profile, education, experience, showcase.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
