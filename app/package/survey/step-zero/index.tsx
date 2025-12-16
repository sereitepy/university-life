'use client'

import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Dispatch, SetStateAction, useRef } from 'react'
import Age from './age'
import Gender from './gender'
import { Grades } from './grades'
import { Highschool } from './highschool'
import GraduationYear from './graduation-year'
import BacIIGrade from './bacII-grade'
import AcademicPerformance from './academic-performance'

interface StepOneProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepZero({ formData, setFormData }: StepOneProp) {
  const genderRef = useRef<HTMLInputElement | null>(null)
  const gradeRef = useRef<HTMLInputElement | null>(null)
  const highschoolRef = useRef<HTMLInputElement | null>(null)
  const gradYearRef = useRef<HTMLInputElement | null>(null)
  const bacIIRef = useRef<HTMLInputElement | null>(null)
  const familyEconomicRef = useRef<HTMLInputElement | null>(null)
  const academicPerformanceRef = useRef<HTMLInputElement | null>(null)

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

      <section className='flex flex-col items-center justify-center gap-25 overflow-y-auto scroll-smooth pb-15'>
        {/* Age */}
        <section
          className={`relative flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${formData.personal.age && 'opacity-50 scale-85'}`}
        >
          <h1 className='font-bold text-4xl w-fit mx-auto'>Your Age</h1>
          <Age
            formData={formData}
            setFormData={setFormData}
            genderRef={genderRef}
          />
        </section>

        {/* Gender */}
        <section
          ref={genderRef}
          id='gender-section'
          className={`flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${
              !formData.personal.age && 'opacity-50 scale-85 cursor-not-allowed'
            }
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
          className={`flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${
              !formData.personal.gender &&
              'opacity-50 scale-85 cursor-not-allowed'
            }
            ${formData.personal.grade && 'opacity-50 scale-85'}
            `}
        >
          <h1 className='font-bold text-4xl'>Current Grade/Level</h1>
          <Grades
            formData={formData}
            setFormData={setFormData}
            highschoolRef={highschoolRef}
          />
        </section>

        {/* Highschool */}
        <section
          ref={highschoolRef}
          className={`flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${
              !formData.personal.grade &&
              'opacity-50 scale-85 cursor-not-allowed'
            }
            ${formData.personal.highschool && 'opacity-50 scale-85'}
            `}
        >
          <h1 className='font-bold text-4xl'>Select Highschool</h1>
          <Highschool
            formData={formData}
            setFormData={setFormData}
            gradYearRef={gradYearRef}
          />
        </section>

        {/* Graduation Year */}
        <section
          ref={gradYearRef}
          className={`flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${
              !formData.personal.highschool &&
              'opacity-50 scale-85 cursor-not-allowed'
            }
            ${formData.personal.graduation_year && 'opacity-50 scale-85'}
            `}
        >
          <h1 className='font-bold text-4xl'>Your Graduation Year</h1>
          <GraduationYear
            formData={formData}
            setFormData={setFormData}
            bacIIRef={bacIIRef}
          />
        </section>

        {/* BacII Grade */}
        <section
          ref={bacIIRef}
          className={`flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${
              !formData.personal.graduation_year &&
              'opacity-50 scale-85 cursor-not-allowed'
            }
            ${formData.personal.bacII_grade && 'opacity-50 scale-85'}
            `}
        >
          <h1 className='font-bold text-4xl'>Your BacII Grade</h1>

          <BacIIGrade
            formData={formData}
            setFormData={setFormData}
            academicPerformanceRef={academicPerformanceRef}
          />
        </section>

        {/* Academic Performance */}
        <section
          ref={academicPerformanceRef}
          className={`flex flex-col justify-center items-center gap-5 transition-all duration-300 ease-in-out
            ${
              !formData.personal.bacII_grade &&
              'opacity-50 scale-85 cursor-not-allowed'
            }
            ${formData.personal.academic_performance && 'opacity-50 scale-85'}
            `}
        >
          <h1 className='font-bold text-4xl'>Acadmic Performance</h1>
          <AcademicPerformance
            formData={formData}
            setFormData={setFormData}
            familyEconomicRef={familyEconomicRef}
          />
        </section>
      </section>
    </div>
  )
}
