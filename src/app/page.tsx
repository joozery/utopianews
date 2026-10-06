import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";

export const metadata: Metadata = {
  openGraph: {
    title: "Utopia News — เรื่องราวเพื่อโลกที่ดีกว่า",
    description: "ค้นพบไอเดีย ผู้คน และความเปลี่ยนแปลงเพื่ออนาคตที่ดีกว่า",
    siteName: "Utopia News",
    type: "website",
    images: [{
      url: "/asset/coverhero.png",
      width: 1717,
      height: 916,
      alt: "Utopia News — เรื่องราวเพื่อโลกที่ดีกว่า",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utopia News — เรื่องราวเพื่อโลกที่ดีกว่า",
    description: "ค้นพบไอเดีย ผู้คน และความเปลี่ยนแปลงเพื่ออนาคตที่ดีกว่า",
    images: ["/asset/coverhero.png"],
  },
};

export default function Home() {
  return <HomePage />;
}
