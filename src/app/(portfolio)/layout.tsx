import NavbarComponent from "@/components/NavbarComponent";
import FooterGradient from "@/components/FooterGradient";

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterGradient />
    </>
  );
}
