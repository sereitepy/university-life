import { Dispatch, SetStateAction } from 'react'
import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import RoadmapArrow from './roadmap-arrow'
import StudentStatus from './student-status'

interface StepZeroProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepZero({ formData, setFormData }: StepZeroProp) {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <DialogTitle className='text-4xl font-bold'>
          Welcome to your personal package!
        </DialogTitle>
        <DialogDescription className='text-lg'>
          You have to honestly select answers that best aligned to you most
        </DialogDescription>
      </div>
      <RoadmapArrow />
      <section className='flex flex-col items-center justify-center gap-10'>
        <h1 className='font-bold text-2xl'>
          Please select the one that best describes you
        </h1>
        <StudentStatus formData={formData} setFormData={setFormData} />
      </section>
    </div>
  )
}
