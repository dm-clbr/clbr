import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://aveyosales.com'),
  title: {
    default: 'CLBR Sales',
    template: '%s | CLBR Sales',
  },
  description: 'Join the fastest-growing sales team in the industry. Real stats, insane incentives, and world-class culture.',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'CLBR Sales',
    description: 'Join the fastest-growing sales team in the industry. Real stats, insane incentives, and world-class culture.',
    siteName: 'CLBR Sales',
    images: [
      { url: '/images/clbr-team.png', width: 1200, height: 630, alt: 'CLBR Sales Team' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLBR Sales',
    description: 'Join the fastest-growing sales team in the industry. Real stats, insane incentives, and world-class culture.',
    images: ['/images/clbr-team.png'],
  },
  icons: {
    icon: [
      // { url: '/favicon.ico' },
      { url: '/images/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/images/favicon.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
