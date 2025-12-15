'use client'

import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Dispatch, SetStateAction, useRef } from 'react'
import Age from './age'
import Gender from './gender'
import { Grades } from './grades'

interface StepOneProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepZero({ formData, setFormData }: StepOneProp) {
  const gradeRef = useRef<HTMLInputElement | null>(null)
  return (
    <div className='flex flex-col gap-5 transition-all duration-300 ease-in-out'>
      <section className='flex flex-col gap-4 items-baseline justify-baseline'>
        <DialogTitle className='text-2xl'>Personal</DialogTitle>
        <DialogDescription className='text-lg'>
          This entire process is anonymous! We won&apos;t know who you are. This
          section helps improve our recommendation system for your university
          choice only.
        </DialogDescription>
      </section>

      <Separator className='mb-5' />

      <section className='flex flex-col items-center justify-center gap-20 overflow-y-auto scroll-smooth'>
        {/* Age */}
        <section
          className={`relative flex flex-col justify-center items-center gap-5 
            ${formData.personal.age && 'opacity-50 scale-85'}`}
        >
          <h1 className='font-bold text-4xl w-fit mx-auto'>Your Age</h1>
          <Age formData={formData} setFormData={setFormData} />
        </section>

        {/* Gender */}
        <section
          id='gender-section'
          className={`flex flex-col justify-center items-center gap-5 
            ${!formData.personal.age && 'opacity-50 scale-85'}
            ${formData.personal.gender && 'opacity-50 scale-85'}`}
        >
          <h1 className='font-bold text-4xl'>Gender</h1>
          <Gender
            formData={formData}
            setFormData={setFormData}
            gradeRef={gradeRef}
          />
        </section>

        {/* Grade */}
        <section
          ref={gradeRef}
          id='grade-section'
          className={`flex flex-col justify-center items-center gap-5 
            ${!formData.personal.gender && 'opacity-50 scale-85'}`}
        >
          <h1 className='font-bold text-4xl'>Current Grade/Level</h1>
          <Grades formData={formData} setFormData={setFormData} />
        </section>
      </section>
    </div>
  )
}
