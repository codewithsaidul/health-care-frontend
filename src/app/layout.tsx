import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { LogInSuccessToast } from "@/components/shared/LogInSuccessToast";
import { LogOutSuccessToast } from "@/components/shared/LogOutSuccessToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Health Care - CodeWIthSaidul",
  description: "Health Care is a easy to get a consultent from top doctors",
  icons: {
    icon: "/fabicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <LogInSuccessToast />
        <LogOutSuccessToast />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
