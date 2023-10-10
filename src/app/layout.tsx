import './globals.css'
import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome | Sign-up',
  description: 'A welcome page with a sign-up form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
