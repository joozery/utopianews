import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { NavigationScroll } from "@/components/layout/navigation-scroll";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: "Utopia News — เรื่องราวเพื่อโลกที่ดีกว่า",
  description: "ค้นพบไอเดีย ผู้คน และความเปลี่ยนแปลงเพื่ออนาคตที่ดีกว่า",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${notoSansThai.variable} h-full antialiased`}>
      <body style={{ position: "relative" }}>
        <NavigationScroll />
        {children}
      </body>
    </html>
  );
}
