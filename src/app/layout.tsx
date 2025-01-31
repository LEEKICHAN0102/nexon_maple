import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Provider from "@/components/Provider";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "메싹싹 - InGame UI",
  description: "NEXON OPEN API - MAPLE STORY",
  keywords: ["메싹싹", "메이플스토리", "메이플스토리싹싹" ,"넥슨 API", "MapleStory", "게임 UI", "유저 검색", "메이플 검색"],
  icons: {
    icon: "/rdazo.png",
  },
  alternates: {
    canonical: "https://nexon-maple-ssakssak.vercel.app"
  },
  authors: [{ name: "LEEKICHAN0102", url: "https://github.com/LEEKICHAN0102" }],
  publisher: "LEEKICHAN0102",
  openGraph: {
    type: "website",
    url: "https://nexon-maple-ssakssak.vercel.app",
    title: "메싹싹 - InGame UI",
    description: "NEXON OPEN API - MAPLE STORY",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
