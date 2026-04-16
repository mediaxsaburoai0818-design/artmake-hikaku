import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "アートメイク比較ナビ【2026年最新】おすすめクリニックランキング",
  description: "【2026年4月最新】アートメイク・眉毛アートメイクのおすすめクリニック5社を徹底比較。料金・技術力・口コミで100点独自採点。メディカルブロー、クレアージュ、デイジークリニック等を完全解説。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaru.className} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
