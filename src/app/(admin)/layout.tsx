import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const ok = await verifySession();
  if (!ok) redirect("/login");

  return (
    <div className="min-h-screen flex bg-neutral-50 dark:bg-neutral-950">
      <div className="hidden md:flex flex-col border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <AdminNav />
      </div>
      <main className="flex-1 p-6 md:p-10 overflow-x-hidden">{children}</main>
    </div>
  );
}
