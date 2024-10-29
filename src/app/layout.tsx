import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "메싹싹 - InGame UI",
  description: "NEXON OPEN API - MAPLE STORY",
  icons: {
    icon: "/rdazo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
