import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { ProgressDemo } from '../progress'
import StepOne from './step-one'
import StepZero from './step-zero'

interface SurveyProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function Survey({ formData, setFormData }: SurveyProp) {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = 6

  return (
    <>
      <div className=''>
        <DialogContent className='min-w-screen h-full [&>button:first-of-type]:hidden overflow-y-auto scroll-smooth'>
          <div className='w-240 h-auto mx-auto flex flex-col justify-between gap-10'>
            <DialogHeader className='relative'>
              <DialogClose className='absolute top-8 -left-20 hover:font-extrabold'>
                <X className='hover:font-bold' fontWeight='bold' />
              </DialogClose>
              <div className='flex justify-center items-center'>
                <ProgressDemo step={(currentStep / steps) * 100} />
              </div>
              {currentStep === 0 && (
                <StepZero formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 1 && <StepOne />}
            </DialogHeader>
            <DialogFooter className='w-full h-fit'>
              <div
                className={`w-full flex ${
                  currentStep === 0
                    ? 'items-end justify-end'
                    : 'items-center justify-between'
                }`}
              >
                <Button
                  variant='secondary'
                  onClick={() => {
                    if (currentStep > 0) {
                      setCurrentStep(currentStep - 1)
                    }
                  }}
                  className={currentStep !== 0 ? 'flex' : 'hidden'}
                >
                  Back
                </Button>
                <Button
                  type={currentStep === 6 ? 'submit' : 'button'}
                  onClick={() => {
                    if (currentStep < 6) {
                      setCurrentStep(currentStep + 1)
                    }
                  }}
                >
                  {currentStep === 6 ? (
                    <p>
                      <Link href='/result'>Confirm </Link>
                    </p>
                  ) : (
                    <p>Next</p>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </div>
        </DialogContent>
      </div>
    </>
  )
}
