import { getPortfolioData } from "@/lib/portfolio";
import PortfolioPage from "@/components/PortfolioPage";

export const revalidate = 3600;

export default async function Page() {
  const data = await getPortfolioData();
  return <PortfolioPage data={data} />;
}
