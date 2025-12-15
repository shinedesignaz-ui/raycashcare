import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ray Cash Care | Navy SEAL Motivational Speaker',
  description: 'Inspiring leadership and motivation from a Navy SEAL. Transform your team and organization with powerful insights from combat experience.',
  keywords: 'Navy SEAL, motivational speaker, leadership, team building',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

