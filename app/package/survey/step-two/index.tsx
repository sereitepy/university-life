import { Dispatch, SetStateAction, useRef } from 'react'
import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import Values from './values'

interface StepTwoProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepTwo({ formData, setFormData }: StepTwoProp) {
  const valueRef = useRef<HTMLInputElement | null>(null)
  const career_values = formData.career_interests.values

  return (
    <div className='flex flex-col gap-5 transition-all duration-300 ease-in-out'>
      <section className='flex flex-col gap-4 items-baseline justify-baseline'>
        <DialogTitle className='text-2xl'>
          2.&nbsp;&nbsp;Career Interests
        </DialogTitle>
        <DialogDescription className='text-lg'>
          This entire process is anonymous! We won&apos;t know who you are. This
          section helps improve our recommendation system for your university
          choice only.
        </DialogDescription>
      </section>

      <Separator className='mb-5' />
      <section className='flex flex-col items-center justify-center gap-30 overflow-y-auto scroll-smooth pb-15'>
        {/* Value */}
        <section
          className={`relative flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out
                    ${career_values.length > 0 && 'opacity-50'}
                    ${!career_values.length && 'scale-100'}
                    `}
        >
          <h1 className='font-bold text-4xl w-fit mx-auto'>
            Select all that are valuable to you
          </h1>
          <Values
            formData={formData}
            setFormData={setFormData}
            valueRef={valueRef}
          />
        </section>
      </section>
    </div>
  )
}
