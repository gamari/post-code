import { GeistSans } from 'geist/font/sans'
import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Bad Codes',
  description: '悪いコードを集めたサイトです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
