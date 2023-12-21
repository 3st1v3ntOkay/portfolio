import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: "Me's Portfolio",
  description: "A programmer's Portfolio named Esteban Jimenez Valdez",
  // manifest: "/manifest.webmanifest",
  openGraph: {
    images: [
      {
        url: 'http://localhost:3000/api/og?title=Home',
        width: 1200,
        height: 630,
        alt: 'home page'
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} content-grid`}>
        {children}
      </body>
    </html>
  )
}
