import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abde.lol/'),
  title: { default: 'Abde Mohamett', template: '%s | Abde Mohamett' },
  description: 'Developer & Marketer',
  openGraph: {
    title: 'Abde Mohamett',
    description: 'Developer & Marketer.',
    url: 'https://www.abde.lol/',
    siteName: 'Abde Moahmett',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Abde Mohamett',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-12 items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
