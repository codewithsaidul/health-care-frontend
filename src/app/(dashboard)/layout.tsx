import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Health Care - CodeWIthSaidul",
  description: "Health Care is a easy to get a consultent from top doctors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
