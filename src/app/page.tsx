import { ButtonCopyToClipboard } from '@/components/button-copy-to-clipboard'
import { Icons } from '@/components/icons'
import { Nav } from '@/components/nav'
import { siteConfig } from '@/config/site'

export default function Home() {
  const ip = '38.253.116.83'
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 sm:p-16">
      <div className="top-0 mx-auto flex w-full max-w-3xl sm:sticky">
        <Nav />
      </div>
      <div className="container relative mx-auto flex max-w-3xl flex-1 flex-col gap-8 rounded-lg border border-border p-4 backdrop-blur-[2px]">
        <div className="mx-auto mt-12 max-w-2xl gap-4 text-center">
          <h1 className="text-3xl">{siteConfig.name}</h1>
          <section className="flex min-h-60 flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center gap-2 p-2">
              <label>Your public IP address:</label>
              <pre className="flex items-center gap-2 rounded-lg border border-border bg-background/95 p-2 pl-4 text-3xl backdrop-blur-[2px] supports-[backdrop-filter]:bg-background/60">
                <code>{ip}</code>
                <ButtonCopyToClipboard text={ip} />
              </pre>
            </div>
          </section>
        </div>
        <span className="flex h-40 w-full items-center justify-center bg-muted-foreground text-background">
          banner
        </span>
        <article className="flex min-h-full flex-1 flex-col">
          <div className="flex flex-col gap-3 border-t border-border pt-4">
            <h3 className="flex items-center gap-1 text-base">
              <Icons.info /> More about IP addresses
            </h3>
          </div>
        </article>
        <div className="border-t border-border pt-4">
          <p className="text-center text-sm text-muted-foreground">
            Code by{' '}
            <a
              className="text-foreground underline hover:no-underline"
              href="https://github.com/franklinrms"
            >
              Franklin
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
