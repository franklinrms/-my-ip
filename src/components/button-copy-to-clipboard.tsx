'use client'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { Button, ButtonProps } from './ui/button'
import { useState } from 'react'
import { Icons } from './icons'

interface ButtonCopyToClipboardProps extends ButtonProps {
  text: string
}

export function ButtonCopyToClipboard({
  text,
  ...props
}: ButtonCopyToClipboardProps) {
  const [, copy] = useCopyToClipboard()
  const [hasCopiedText, setHasCopiedText] = useState(false)

  const handleCopy = () => {
    copy(text)
    setHasCopiedText(true)
    setTimeout(() => setHasCopiedText(false), 2000)
  }
  return (
    <Button variant="ghost" size="sm" onClick={handleCopy} {...props}>
      {hasCopiedText ? <Icons.check /> : <Icons.copy />}
    </Button>
  )
}
