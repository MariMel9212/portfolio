import type { Metadata } from "next";
import { Geist, Homenaje, Inika, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const homenaje = Homenaje({
  variable: "--font-homenaje",
  weight: "400",
  subsets: ["latin"],
});

const inika = Inika({
  variable: "--font-inika",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Мария Мельничук — Product Designer",
  description:
    "Портфолио продуктового дизайнера: мобильные и веб-интерфейсы, кейсы и контакты.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geist.variable} ${homenaje.variable} ${inika.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
