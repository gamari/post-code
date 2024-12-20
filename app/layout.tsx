import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/app/_components/header/header";
import { Toaster } from "@/src/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "./providers";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "PostCode";

const defaultUrl = process.env.VERCEL_URL
  ? `https://post-codes.net`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "コード中心型の投稿サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notojp.className}>
      <body className="bg-background text-foreground w-screen overflow-x-hidden">
        <Providers>
          <main className="flex flex-col min-h-screen relative bg-sky-100">
            <Header />
            <div className="flex-1 grid">{children}</div>
            <Toaster />
            <SpeedInsights />
            <Analytics />
          </main>
        </Providers>
      </body>
    </html>
  );
}
