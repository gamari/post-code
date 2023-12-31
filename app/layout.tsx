import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/app/_components/header/header";
import { GeistSans } from "geist/font/sans";
import { SupabaseProvider } from "@/src/contexts/SupabaseProvider";
import { Toaster } from "@/src/components/ui/toaster";
import { LanguageListProvider } from "@/src/contexts/LanguageListProvider";
import { Analytics } from '@vercel/analytics/react';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "PostCode",
  description: "悪いコードを集めたサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={GeistSans.className}>
      <body className="bg-background text-foreground w-screen overflow-x-hidden">
        <SupabaseProvider>
          <LanguageListProvider>
            <main className="flex flex-col min-h-screen relative bg-sky-100">
              <Header />
              <div className="flex-1 grid">{children}</div>
              <Toaster />
              <SpeedInsights />
              <Analytics />
            </main>
          </LanguageListProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
