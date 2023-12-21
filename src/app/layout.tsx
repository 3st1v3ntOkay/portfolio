import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: "Me's Portfolio",
  description: "A programmer's Portfolio named Esteban Jimenez Valdez",
  // manifest: "/manifest.webmanifest",
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
