import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import './globals.css'
import Navbar3 from './Navbar';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cisco VITB',
  description: 'Cisco VITB Community Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar3/>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  )
}
