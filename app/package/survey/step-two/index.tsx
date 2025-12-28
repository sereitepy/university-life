import { Dispatch, SetStateAction, useRef } from 'react'
import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import Values from './values'
import InterestingCareers from './interesting-careers'
import LifeStyle from './life-style'

interface StepTwoProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepTwo({ formData, setFormData }: StepTwoProp) {
  const interestingRef = useRef<HTMLInputElement | null>(null)
  const lifestyleRef = useRef<HTMLInputElement | null>(null)

  const career_values = formData.career_interests.values
  const career_interestings = formData.career_interests.interesting_careers
  const career_lifestyle = formData.career_interests.lifestyle

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
      <section className='flex flex-col items-center justify-center gap-20 overflow-y-auto scroll-smooth pb-15'>
        {/* Value */}
        <section
          className={`relative flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out
                    ${career_values.length > 0 && 'opacity-50 scale-90'}
                    ${!career_values.length && 'scale-100'}
                    `}
        >
          <h1 className='font-bold text-4xl w-fit mx-auto pb-5'>
            Select all that are valuable to you
          </h1>
          <Values
            formData={formData}
            setFormData={setFormData}
            interestingRef={interestingRef}
          />
        </section>
        {/* Interesting Careers */}
        <section
          className={`relative flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out
                    ${
                      !career_values.length &&
                      'opacity-50 cursor-not-allowed scale-90'
                    }
                    ${career_interestings.length > 0 && 'opacity-50 scale-90'}
                    `}
        >
          <h1 className='font-bold text-4xl w-fit mx-auto pb-5'>
            Which career industries seem interesting to you?
          </h1>
          <InterestingCareers
            formData={formData}
            setFormData={setFormData}
            lifestyleRef={lifestyleRef}
          />
          <span ref={interestingRef} className='absolute top-45 right-0'></span>
        </section>
        {/* Lifestyle */}
        <section
          ref={lifestyleRef}
          className={`relative flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out
                    ${
                      !career_interestings.length &&
                      'opacity-50 cursor-not-allowed scale-90'
                    }
                    ${career_lifestyle.length > 0 && 'opacity-50 scale-90'}
                    `}
        >
          <h1 className='font-bold text-4xl w-fit mx-auto pb-5'>
            What kind of lifestyle do you want to have in the future?
          </h1>

          <LifeStyle
            formData={formData}
            setFormData={setFormData}
            lifestyleRef={lifestyleRef}
          />
        </section>
      </section>
    </div>
  )
}
