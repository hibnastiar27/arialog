import { PrismaClient } from "@prisma/client";
import { buildEducationData, buildExperienceData } from "./content";

const prisma = new PrismaClient();

async function main() {
  await prisma.education.deleteMany({});
  await prisma.experience.deleteMany({});
  await prisma.education.createMany({ data: buildEducationData() });
  await prisma.experience.createMany({ data: buildExperienceData() });
  console.log("Migrasi selesai: education & experience sekarang pakai startDate/endDate.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
