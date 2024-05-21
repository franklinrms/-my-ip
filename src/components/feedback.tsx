import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/credenza'
import { Icons } from './icons'
import { Button } from './ui/button'
import { siteConfig } from '@/config/site'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const ratingItems = [
  { value: '1', label: 'Rate 1 out of 5', icon: '🤬' },
  { value: '2', label: 'Rate 2 out of 5', icon: '🙁' },
  { value: '3', label: 'Rate 3 out of 5', icon: '😶' },
  { value: '4', label: 'Rate 4 out of 5', icon: '😁' },
  { value: '5', label: 'Rate 5 out of 5', icon: '😍' },
]

export function Feedback() {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.chatBubble className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Send Feedback</span>
        </Button>
      </CredenzaTrigger>

      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Your feedback is crucial</CredenzaTitle>
          <CredenzaDescription>
            — Franklin, maker of {siteConfig.name}
          </CredenzaDescription>
        </CredenzaHeader>

        <CredenzaBody>
          <form className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input required id="email" type="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating">
                How do you enjoy {siteConfig.name} so far?
              </Label>
              <RadioGroup required className="flex min-h-12 gap-2">
                {ratingItems.map((item) => (
                  <Label
                    key={item.value}
                    htmlFor={item.value}
                    className="flex cursor-pointer items-center text-3xl grayscale-[80%] transition-all duration-200 ease-in-out hover:scale-125 hover:grayscale-0 has-[:checked]:scale-125 has-[:checked]:grayscale-0"
                    aria-label={item.label}
                  >
                    <RadioGroupItem
                      className="hidden"
                      value={item.value}
                      id={item.value}
                    />
                    {item.icon}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <CredenzaClose className="w-full" asChild>
              <Button type="submit">Send Feedback</Button>
            </CredenzaClose>
          </form>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  )
}
