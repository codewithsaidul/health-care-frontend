import DashboardNavbar from "@/components/modules/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/Dashboard/DashboardSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Panel - Health Care | CodeWithSaidul",
  description:
    "Manage patients, view medical records, and handle consultations efficiently in the Health Care Doctor Panel.",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
          <div className="max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
