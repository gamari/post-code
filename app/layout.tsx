import "./globals.css";

import Header from "@/app/header";
import { GeistSans } from "geist/font/sans";
import { SupabaseProvider } from "@/src/contexts/SupabaseProvider";
import { Toaster } from "@/src/components/ui/toaster";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Bad Codes",
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
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 grid">{children}</div>
          </main>
        </SupabaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
