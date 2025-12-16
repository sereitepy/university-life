import { Button } from '@/components/ui/button'
import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { handleConfirm } from '@/app/formData/functions'

interface AcademicPerformanceProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  familyEconomicRef: RefObject<HTMLInputElement | null>
}

export default function AcademicPerformance({
  formData,
  setFormData,
  familyEconomicRef,
}: AcademicPerformanceProp) {
  const performances = [
    {
      id: 'top-of-the-class',
      value: 'Top of the Class',
    },
    {
      id: 'average',
      value: 'Average',
    },
    {
      id: 'need-support',
      value: 'Need Support',
    },
  ]
  const [type, setType] = useState(formData.personal.academic_performance || '')
  const disabled = !formData.personal.bacII_grade
  const handleAcademic = (id: string) => {
    setFormData({
      ...formData,
      personal: {
        ...formData.personal,
        academic_performance: id,
      },
    })
    setType(id)
    handleConfirm(familyEconomicRef)
  }
  return (
    <div className='flex items-center justify-center gap-5'>
      {performances.map(item => (
        <div key={item.id}>
          <Button
            disabled={disabled}
            onClick={() => handleAcademic(item.id)}
            className={`${
              type === item.id &&
              'border-2 border-lime-400 bg-lime-700 hover:bg-lime-700'
            }`}
          >
            {item.value}
          </Button>
        </div>
      ))}
    </div>
  )
}
