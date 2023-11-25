import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const roboto = Roboto({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeSpector',
  description: 'Everything Code',
  keywords: 'code, codespector, codespector.com',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
