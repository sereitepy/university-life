'use client'

import { FormData } from '@/app/formData'
import { handleConfirm } from '@/app/formData/functions'
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
import { cn } from '@/lib/utils'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Dispatch, RefObject, SetStateAction, useState } from 'react'

const frameworks = [
  {
    value: 'grade-9',
    label: 'Grade 9',
  },
  {
    value: 'grade-10',
    label: 'Grade 10',
  },
  {
    value: 'grade-11',
    label: 'Grade 11',
  },
  {
    value: 'grade-12',
    label: 'Grade 12',
  },
  {
    value: 'freshman',
    label: 'Freshman',
  },
]

interface GradeProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  highschoolRef: RefObject<HTMLInputElement | null>
}

export function Grades({ formData, setFormData, highschoolRef }: GradeProp) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(formData.personal.grade || '')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={!formData.personal.gender}>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between font-medium'
        >
          {value
            ? frameworks.find(framework => framework.value === value)?.label
            : 'Select grade...'}
          <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search grade...' />
          <CommandList>
            <CommandEmpty>No grade found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map(framework => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={currentValue => {
                    setValue(currentValue)
                    setFormData({
                      ...formData,
                      personal: {
                        ...formData.personal,
                        grade: currentValue,
                      },
                    })
                    setOpen(false)
                    handleConfirm(highschoolRef)
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
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
