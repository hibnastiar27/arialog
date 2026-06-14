import BlogNavbarComponent from "@/components/BlogNavbarComponent";
import BlogFooterComponent from "@/components/BlogFooterComponent";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <BlogNavbarComponent />
      {children}
      <BlogFooterComponent />
    </div>
  );
}
