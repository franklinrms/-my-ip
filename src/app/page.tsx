import { Suspense } from 'react'
import { Icons } from '@/components/icons'
import { Nav } from '@/components/nav'
import { IP } from '@/components/ip'
import { siteConfig } from '@/config/site'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 sm:p-16">
      <div className="top-0 mx-auto flex w-full max-w-3xl sm:sticky">
        <Nav />
      </div>
      <div className="container relative mx-auto flex max-w-3xl flex-1 flex-col justify-between gap-8 rounded-lg border border-border p-4 backdrop-blur-[2px]">
        <div className="mx-auto mt-12 min-h-full max-w-2xl flex-1 gap-4 text-center">
          <h1 className="text-3xl">{siteConfig.name}</h1>
          <section className="flex flex-col items-center justify-center p-4">
            <div className="flex min-h-60 flex-col items-center justify-center gap-3 p-2">
              <label>Your public IP address:</label>
              <Suspense fallback={<Skeleton className="h-14 w-60" />}>
                <IP />
              </Suspense>
            </div>
          </section>
        </div>

        <Skeleton className="h-60 w-full" />

        <article className="flex flex-col">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex items-center gap-1 text-base">
                  <Icons.info /> More about IP addresses
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">
                  An Internet Protocol (IP) address is a numerical label
                  assigned to each device connected to a computer network that
                  uses the Internet Protocol for communication. An IP address
                  serves two main functions: host or network interface
                  identification and location addressing.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>

        <footer className="pb-4 pt-2">
          <p className="text-center text-sm text-muted-foreground">
            <a
              className="transition-colors hover:text-foreground"
              href="https://github.com/franklinrms"
              rel="noopener noreferrer"
            >
              Code by Franklin
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
