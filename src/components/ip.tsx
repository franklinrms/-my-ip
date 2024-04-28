import { getIP } from '@/app/actions'
import { ButtonCopyToClipboard } from './button-copy-to-clipboard'

export async function IP() {
  const ip = await getIP()

  return (
    <pre className="flex h-14 items-center gap-2 rounded-md border border-border bg-background/95 p-2 pl-4 text-3xl backdrop-blur-[2px] supports-[backdrop-filter]:bg-background/60">
      <code>{ip}</code>
      <ButtonCopyToClipboard text={ip} />
    </pre>
  )
}
