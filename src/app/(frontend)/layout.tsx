import React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import './style.css'
import './contents.css'
import './responsive.css'
import './form.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'

// Import the context provider
import { MyProvider } from './theContext' // Ensure the path is correct
import Header from './components/header'
import Footer from './components/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SEO-NORD',
  description: 'Security Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode // Use a more straightforward type here
}) {
  // 'use client' should be uncommented if you are using hooks or state
  'use client'

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MyProvider>
          <Header />
          <div style={{ minHeight: '500px' }}>{children}</div>
          <Footer />
        </MyProvider>
      </body>
    </html>
  )
}
