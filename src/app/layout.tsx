import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { ThemeProvider } from '@/components/theme-provider'
import Background from '@/components/background'
import { siteConfig } from '@/config/site'

const hubot = localFont({
  src: '../../public/assets/HubotSans.woff2',
  variable: '--font-hubot',
  weight: '400 900',
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="[color-scheme:dark]" lang="en" suppressHydrationWarning>
      <body className={clsx('font-sans antialiased', hubot.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background>{children}</Background>
        </ThemeProvider>
      </body>
    </html>
  )
}
