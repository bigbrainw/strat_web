import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '韜略法律事務所 | Strategy Law Firm',
  description: '韜略法律事務所。讓當事人理解風險與選項，用策略與證據降低不確定性，讓流程與費用可預期、可溝通。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
