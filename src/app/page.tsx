import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>My IP</h1>
      <ThemeToggle />
    </main>
  )
}
