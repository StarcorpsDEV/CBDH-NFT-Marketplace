import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import { Navbar } from "@/components/shared/Navbar";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Marketplace",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ paddingBottom: "100px" }}>
      <Analytics/>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
