import { FormData } from '@/app/formData'
import { scrollToElement } from '@/app/formData/functions'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ProgressDemo } from '../progress'
import StepOne from './step-one'
import StepZero from './step-zero'

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = 6
  const [formData, setFormData] = useState<FormData>({
    student_status: '',
    personal: {
      age: '',
      gender: '',
      grade: '',
      highschool: '',
      graduation_year: undefined,
      bacII_grade: '',
      academic_performance: '',
    },
    career_interests: {
      values: [],
      willing_work_abroad: '',
      interesting_careers: [],
      lifestyle: [],
      plan_after_graduation: '',
      internship_importance: 3,
    },
    academic: {
      preferred_learning_style: '',
      hobbies: [],
      interested_subjects: [],
      extracurricular: [],
      influence: [],
    },
    campus: {
      study_location: '',
      campus_importance: 3,
      facilities_importance: {
        clubs: 3,
        class_sizes: 3,
        labs: 3,
        library: 3,
        workshop: 3,
        tutoring: 3,
        canteen: 3,
        study_room: 3,
        cafe: 3,
      },
      flexible_schedule_importance: 3,
    },
    financial: {
      budget: '',
      volunteer_internship: '',
      scholarship_need: '',
    },
  })

  const progressStepperRef = useRef<HTMLInputElement | null>(null)

  const stepZeroCompletion = formData.student_status

  const stepOneCompletion =
    formData.personal.age &&
    formData.personal.gender &&
    formData.personal.grade &&
    formData.personal.highschool &&
    formData.personal.graduation_year &&
    formData.personal.bacII_grade &&
    formData.personal.academic_performance

  const handleDisable = () => {
    if (currentStep === 0 && !stepZeroCompletion) {
      return true
    } else if (currentStep === 1 && !stepOneCompletion) {
      return true
    }
  }

  return (
    <>
      <div className=''>
        <DialogContent className='min-w-screen rounded-none border-0 h-full [&>button:first-of-type]:hidden overflow-y-auto scroll-smooth'>
          <div
            ref={progressStepperRef}
            className='w-240 h-auto mx-auto flex flex-col justify-between gap-10'
          >
            <DialogHeader className='relative'>
              <DialogClose className='absolute top-3 -left-20 hover:font-extrabold'>
                <X className='hover:font-bold' fontWeight='bold' />
              </DialogClose>
              <div className='flex justify-center items-center pb-5'>
                <ProgressDemo step={(currentStep / steps) * 100} />
              </div>
              <div className=''>
                {currentStep === 0 && (
                  <StepZero formData={formData} setFormData={setFormData} />
                )}
                {currentStep === 1 && (
                  <StepOne formData={formData} setFormData={setFormData} />
                )}
              </div>
            </DialogHeader>
            <DialogFooter className='w-full h-fit m-10'>
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
                      scrollToElement(progressStepperRef)
                      setCurrentStep(currentStep - 1)
                    }
                  }}
                  className={currentStep !== 0 ? 'flex' : 'hidden'}
                >
                  Back
                </Button>
                <Button
                  disabled={handleDisable()}
                  className={``}
                  type={currentStep === 6 ? 'submit' : 'button'}
                  onClick={() => {
                    if (currentStep < 6) {
                      scrollToElement(progressStepperRef)
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
