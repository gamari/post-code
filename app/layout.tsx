import "./globals.css";

import { GeistSans } from "geist/font/sans";
import Header from "@/src/components/top/header";
import { SupabaseProvider } from "@/src/components/providers/supabase-provider/supabase-provider";
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
      <body className="bg-background text-foreground">
        <SupabaseProvider>
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 grid bg-sky-50">{children}</div>
          </main>
        </SupabaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
