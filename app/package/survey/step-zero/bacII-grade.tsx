import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'
import { handleConfirm } from '@/app/formData/functions'

interface BacIIGradeProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  academicPerformanceRef: RefObject<HTMLInputElement | null>
}

export default function BacIIGrade({
  formData,
  setFormData,
  academicPerformanceRef,
}: BacIIGradeProp) {
  const disabled = !formData.personal.graduation_year
  const [grade, setGrade] = useState(formData.personal.bacII_grade || '')

  const handleBacIIGrade = (grade: string) => {
    setFormData({
      ...formData,
      personal: {
        ...formData.personal,
        bacII_grade: grade,
      },
    })
    setGrade(grade)
    handleConfirm(academicPerformanceRef)
  }
  return (
    <div className='flex items-center justify-center gap-5'>
      <Button
        disabled={disabled}
        className={`${
          grade === 'A' &&
          'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
        }`}
        onClick={() => handleBacIIGrade('A')}
      >
        A
      </Button>
      <Button
        disabled={disabled}
        className={`${
          grade === 'B' &&
          'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
        }`}
        onClick={() => handleBacIIGrade('B')}
      >
        B
      </Button>
      <Button
        disabled={disabled}
        className={`${
          grade === 'C' &&
          'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
        }`}
        onClick={() => handleBacIIGrade('C')}
      >
        C
      </Button>
      <Button
        disabled={disabled}
        className={`${
          grade === 'D' &&
          'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
        }`}
        onClick={() => handleBacIIGrade('D')}
      >
        D
      </Button>
      <Button
        disabled={disabled}
        className={`${
          grade === 'E' &&
          'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
        }`}
        onClick={() => handleBacIIGrade('E')}
      >
        E
      </Button>
      <Button
        disabled={disabled}
        className={`${
          grade === 'F' &&
          'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
        }`}
        onClick={() => handleBacIIGrade('F')}
      >
        F
      </Button>
    </div>
  )
}
