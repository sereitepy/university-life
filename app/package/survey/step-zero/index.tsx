'use client'

import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Dispatch, SetStateAction } from 'react'
import Age from './age'
import Gender from './gender'
import { Grades } from './grades'

interface StepOneProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepZero({ formData, setFormData }: StepOneProp) {
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

      <section className='flex flex-col items-center justify-center gap-20'>
        {/* Age */}
        <section className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-bold text-2xl'>Your Age</h1>
          <Age formData={formData} setFormData={setFormData} />
        </section>

        {/* Gender */}
        <section className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-bold text-2xl'>Gender</h1>
          <Gender formData={formData} setFormData={setFormData} />
        </section>

        {/* Grade */}
        <section className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-bold text-2xl'>Current Grade/Level</h1>
          <Grades formData={formData} setFormData={setFormData} />
        </section>
      </section>
    </div>
  )
}
