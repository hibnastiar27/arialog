import { prisma } from "./db";
import {
  dataAboutMe,
  dataDescriptions,
  dataEducations,
  dataExperiences,
  dataShowcase,
} from "@/constants/data";

export type EducationItem = {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  imageUrl: string;
};

export type ExperienceItem = {
  title: string;
  institution: string;
  date: string;
  duration: string;
  description: string[];
  link_sertifikat: string;
  imageUrl: string;
};

export type ShowcaseItem = {
  id: number;
  title: string;
  slug: string;
  kategori: string;
  tech_stack: string[];
  link_demo: string;
  link_github: string;
  url_img: string;
  description: string;
};

export type PortfolioData = {
  aboutMe: typeof dataAboutMe;
  descriptions: typeof dataDescriptions;
  educations: { en: EducationItem[]; id: EducationItem[] };
  experiences: { en: ExperienceItem[]; id: ExperienceItem[] };
  showcase: { en: ShowcaseItem[]; id: ShowcaseItem[] };
};

const fallback: PortfolioData = {
  aboutMe: dataAboutMe,
  descriptions: dataDescriptions,
  educations: dataEducations,
  experiences: dataExperiences,
  showcase: dataShowcase,
};

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const [profile, educations, experiences, showcases] = await Promise.all([
      prisma.profile.findFirst(),
      prisma.education.findMany({ orderBy: { order: "asc" } }),
      prisma.experience.findMany({ orderBy: { order: "asc" } }),
      prisma.showcase.findMany({ orderBy: { order: "asc" } }),
    ]);

    if (!profile) return fallback;

    return {
      aboutMe: {
        url_img: profile.urlImg,
        resumeUrl: profile.resumeUrl,
        short_bio: { en: profile.shortBioEn, id: profile.shortBioId },
      },
      descriptions: { en: profile.descriptionEn, id: profile.descriptionId },
      educations: {
        en: educations.map((e) => ({
          title: e.titleEn,
          institution: e.institution,
          duration: e.durationEn,
          description: e.descriptionEn,
          imageUrl: e.imageUrl,
        })),
        id: educations.map((e) => ({
          title: e.titleId,
          institution: e.institution,
          duration: e.durationId,
          description: e.descriptionId,
          imageUrl: e.imageUrl,
        })),
      },
      experiences: {
        en: experiences.map((e) => ({
          title: e.titleEn,
          institution: e.institution,
          date: e.date,
          duration: e.durationEn,
          description: e.descriptionEn,
          link_sertifikat: e.linkSertifikat,
          imageUrl: e.imageUrl,
        })),
        id: experiences.map((e) => ({
          title: e.titleId,
          institution: e.institution,
          date: e.date,
          duration: e.durationId,
          description: e.descriptionId,
          link_sertifikat: e.linkSertifikat,
          imageUrl: e.imageUrl,
        })),
      },
      showcase: {
        en: showcases.map((s) => ({
          id: s.id,
          title: s.titleEn,
          slug: s.slug,
          kategori: s.kategoriEn,
          tech_stack: s.techStack,
          link_demo: s.linkDemo,
          link_github: s.linkGithub,
          url_img: s.urlImg,
          description: s.descriptionEn,
        })),
        id: showcases.map((s) => ({
          id: s.id,
          title: s.titleId,
          slug: s.slug,
          kategori: s.kategoriId,
          tech_stack: s.techStack,
          link_demo: s.linkDemo,
          link_github: s.linkGithub,
          url_img: s.urlImg,
          description: s.descriptionId,
        })),
      },
    };
  } catch (error) {
    console.error("[getPortfolioData] gagal, pakai data fallback:", error);
    return fallback;
  }
}
