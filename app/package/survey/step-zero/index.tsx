'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Grades } from './grades'

enum Gender {
  female,
  male,
  others,
}
export default function StepZero() {
  const [age, setAge] = useState(18)
  const [gender, setGender] = useState('')
  const minAge = 13
  const maxAge = 60
  return (
    <div className='flex flex-col gap-8'>
      <section className='flex flex-col gap-4 items-center justify-center'>
        <DialogTitle className='text-3xl'>Who You Are. 👩🧑</DialogTitle>
        <DialogDescription className='text-xl'>
          This entire process is anonymous! We won&apos;t know who you are. This
          section helps improve our recommendation system for your university
          choice only.
        </DialogDescription>
      </section>
      <Separator />
      {/* Age | Gender | Grade */}
      <section className='flex items-baseline justify-baseline gap-[15%]'>
        {/* Age */}
        <section className='flex flex-col justify-center items-center gap-3'>
          <h1 className='font-bold text-lg'>Your Age</h1>
          <div className='flex gap-5 transition-all duration-200 ease-in-out'>
            <Button
              className='p-1 bg-primary/20 border border-primary/50'
              size='icon-sm'
              onClick={() => {
                if (age >= minAge) {
                  setAge(age - 1)
                }
              }}
            >
              <ArrowLeftIcon size={20} weight='bold' />
            </Button>
            {/* Age */}
            <div className='text-2xl font-semibold w-10 flex items-center justify-center'>
              {age}
            </div>
            <Button
              className='p-1 bg-primary/20 border border-primary/50'
              size='icon-sm'
              onClick={() => {
                if (age < maxAge) {
                  setAge(age + 1)
                }
              }}
            >
              <ArrowRightIcon size={20} weight='bold' />
            </Button>
          </div>
        </section>
        {/* Gender */}
        <section className='flex flex-col justify-baseline items-baseline gap-3'>
          <h1 className='font-bold text-lg'>Gender</h1>
          <div className='flex flex-col gap-1.5'>
            <div className='flex gap-3 items-center'>
              <Checkbox
                id='female'
                onCheckedChange={() => {
                  setGender('female')
                }}
              />
              <Label htmlFor='female' className='text-md'>
                Female
              </Label>
            </div>
            <div className='flex gap-3 items-center'>
              <Checkbox
                id='male'
                onCheckedChange={() => {
                  setGender('male')
                }}
                // checked={gender}
              />
              <Label htmlFor='male' className='text-md'>
                Male
              </Label>
            </div>
            <div className='flex gap-3 items-center'>
              <Checkbox
                id='others-gender'
                onCheckedChange={() => {
                  setGender('others-gender')
                }}
                value={gender}
              />
              <Label htmlFor='others-gender' className='text-md'>
                Others
              </Label>
            </div>
          </div>
        </section>

        {/* Grade */}
        <section className='flex flex-col justify-baseline items-baseline gap-3'>
          <h1 className='font-bold text-lg'>Current Grade/Level</h1>
          <Grades />
        </section>
      </section>
    </div>
  )
}
