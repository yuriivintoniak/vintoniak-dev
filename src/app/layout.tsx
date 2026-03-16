import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Personal website of software developer Yurii Vintoniak',
  description: 'Personal website of software developer Yurii Vintoniak'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.className} flex flex-col antialiased`}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='mb-auto p-4 flex-1 flex items-center justify-center'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
