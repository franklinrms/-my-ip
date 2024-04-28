import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function Nav() {
  return (
    <nav className="flex flex-1 items-center justify-center gap-2 p-1 sm:absolute sm:-right-12 sm:top-2 sm:flex-col">
      <ThemeToggle />
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'icon',
            }),
          )}
        >
          <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
    </nav>
  )
}
