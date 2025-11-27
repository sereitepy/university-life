import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'University Life | Cambodia',
  description:
    'A website that helps prepare high school students for university life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className='bg-transparent'>
          <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-lg px-10 py-5'>
            <Header />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
