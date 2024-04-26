import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'

const hubot = localFont({
  src: '../../public/assets/HubotSans.woff2',
  variable: '--font-hubot',
  weight: '400 900',
})

export const metadata: Metadata = {
  title: 'My IP',
  description: 'A simple IP address lookup tool',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="[color-scheme:dark]" lang="en">
      <body className={clsx('font-sans antialiased', hubot.variable)}>
        {children}
      </body>
    </html>
  )
}
