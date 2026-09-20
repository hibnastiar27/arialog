import { dataEducations, dataExperiences } from "../src/constants/data";

const MONTH_ABBR: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parsePart(part: string): Date {
  const [mon, year] = part.trim().split(/\s+/);
  return new Date(parseInt(year, 10), MONTH_ABBR[mon] ?? 0, 1);
}

export function parsePeriod(dateStr: string): { start: Date; end: Date } {
  const parts = dateStr.split("-").map((s) => s.trim());
  const start = parsePart(parts[0]);
  const end = parts[1] ? parsePart(parts[1]) : start;
  return { start, end };
}

export function buildEducationData() {
  return dataEducations.en.map((item, i) => ({
    titleEn: item.title,
    titleId: dataEducations.id[i].title,
    institution: item.institution,
    startDate: null as Date | null,
    endDate: null as Date | null,
    descriptionEn: item.description,
    descriptionId: dataEducations.id[i].description,
    imageUrl: item.imageUrl,
    order: i,
  }));
}

export function buildExperienceData() {
  return dataExperiences.en.map((item, i) => {
    const { start, end } = parsePeriod(item.date);
    return {
      titleEn: item.title,
      titleId: dataExperiences.id[i].title,
      institution: item.institution,
      startDate: start,
      endDate: end,
      descriptionEn: item.description,
      descriptionId: dataExperiences.id[i].description,
      linkSertifikat: item.link_sertifikat,
      imageUrl: item.imageUrl,
      order: i,
    };
  });
}
