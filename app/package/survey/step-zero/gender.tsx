import { FormData } from '@/app/formData'
import { Label } from '@/components/ui/label'
import { Dispatch, RefObject, SetStateAction } from 'react'

interface GenderProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  gradeRef: RefObject<HTMLInputElement | null>
}

export default function Gender({ formData, setFormData, gradeRef }: GenderProp) {
  const gender = [
    {
      id: 'female',
      label: 'Female',
    },
    {
      id: 'male',
      label: 'Male',
    },
    {
      id: 'others',
      label: 'Others',
    },
  ]

  const handleConfirm = () => {
    gradeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <div className='flex gap-10'>
      {gender.map(item => (
        <div key={item.id} className='flex gap-1 items-center'>
          <input
            type='radio'
            id={item.id}
            name='gender'
            checked={formData.personal.gender === item.id}
            onChange={() => {
              setFormData({
                ...formData,
                personal: {
                  ...formData.personal,
                  gender: item.id,
                },
              })
              handleConfirm()

            }}
            className='w-5 h-5 cursor-pointer'
          />
          <Label htmlFor={item.id} className='text-lg cursor-pointer'>
            {item.label}
          </Label>
        </div>
      ))}
    </div>
  )
}
