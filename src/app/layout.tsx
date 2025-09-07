import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ismail En Niou - Portfolio',
  description: 'Dynamic 3D Portfolio showcasing professional experience, skills, and projects with modern web technologies.',
  keywords: 'portfolio, developer, 3D animations, web development, professional',
  authors: [{ name: 'Ismail En Niou' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Ismail En Niou - Portfolio',
    description: 'Dynamic 3D Portfolio showcasing professional experience, skills, and projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail En Niou - Portfolio',
    description: 'Dynamic 3D Portfolio showcasing professional experience, skills, and projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-x-hidden`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `
        }}
      >
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}