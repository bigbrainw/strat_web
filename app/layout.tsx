import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '韜略法律事務所',
  description: '韜略法律事務所。專業法律服務，24 小時內回覆。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
