import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../assets/css/globals.css'
import { Toaster } from '@/components/common/ui/sonner'
import Header from '@/components/shared/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tokyo Pulse | Japan news',
  description: 'Japan news',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
