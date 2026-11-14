import type { Metadata } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import "./globals.css";

// Covers the Kyrgyz letters ң, ө, ү in both regular and bold text.
const notoSans = Noto_Sans({
  variable: "--font-bsu-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "БГУ имени К. Карасаева", template: "%s — БГУ" },
  description: "Бишкекский государственный университет имени академика Кусеина Карасаева.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" suppressHydrationWarning className={`${notoSans.variable} ${geistMono.variable} h-full antialiased`}>
    <body className="min-h-full flex flex-col"><LocaleProvider>{children}</LocaleProvider></body>
  </html>;
}
