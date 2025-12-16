'use client'

import { FormData } from '@/app/formData'
import { cambodiaSchools } from '@/app/formData/schools'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Dispatch, RefObject, SetStateAction, useState } from 'react'

interface HighschoolProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  gradYearRef: RefObject<HTMLInputElement | null>
}

export function Highschool({
  formData,
  setFormData,
  gradYearRef,
}: HighschoolProp) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(formData.personal.highschool || '')

  const handleConfirm = () => {
    gradYearRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={!formData.personal.grade}>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between font-medium'
        >
          {value
            ? cambodiaSchools.find(framework => framework.value === value)
                ?.label
            : 'Select school...'}
          <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search school...' />
          <CommandList>
            <CommandEmpty>No school found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className='h-[300px]'>
                {cambodiaSchools.map(framework => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={currentValue => {
                      setValue(currentValue)
                      setOpen(false)
                      setFormData({
                        ...formData,
                        personal: {
                          ...formData.personal,
                          highschool: currentValue,
                        },
                      })
                      handleConfirm()
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === framework.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
