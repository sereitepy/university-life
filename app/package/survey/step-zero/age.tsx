import { FormData } from '@/app/formData'
import { handleConfirm } from '@/app/formData/functions'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { Dispatch, RefObject, SetStateAction, useState } from 'react'

interface AgeProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  genderRef: RefObject<HTMLInputElement | null>
}

export default function Age({ formData, setFormData, genderRef }: AgeProp) {
  const [age, setAge] = useState('18')
  const minAge = 13
  const maxAge = 60
  const minus = parseInt(age) - 1
  const plus = parseInt(age) + 1


  return (
    <div className='relative flex gap-5 items-center transition-all duration-200 ease-in-out'>
      <Button
        className='p-1 bg-primary/20 border border-primary/50'
        size='icon-sm'
        onClick={() => {
          if (parseInt(formData.personal.age) >= minAge) {
            setAge(minus.toString())
          } else if (!age) {
            setAge('17')
          } else if (parseInt(age) >= minAge) {
            setAge(minus.toString())
          }
        }}
      >
        <ArrowLeftIcon size={20} weight='bold' />
      </Button>

      {/* Age */}
      <div className='text-5xl font-semibold w-20 mx-auto flex items-center justify-center'>
        <input
          type='number'
          placeholder='18'
          className='w-20 mx-auto remove-arrow text-center'
          min={minAge}
          max={maxAge}
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <Button
        className='p-1 bg-primary/20 border border-primary/50'
        size='icon-sm'
        onClick={() => {
          if (parseInt(formData.personal.age) < maxAge) {
            setAge(plus.toString())
          } else if (!age) {
            setAge('19')
          } else if (parseInt(age) < maxAge) {
            setAge(plus.toString())
          }
        }}
      >
        <ArrowRightIcon size={20} weight='bold' />
      </Button>
      <Button
        variant='ghost'
        size='icon-sm'
        className={`w-fit px-2 text-xs absolute -right-25 
        ${!age ? 'hidden' : 'block'}
        ${formData.personal.age === age ? 'border border-green-400' : ''}
        ${formData.personal.age === age ? 'hidden' : 'block'}
        `}
        onClick={() => {
          setFormData({
            ...formData,
            personal: {
              ...formData.personal,
              age: age,
            },
          })
          handleConfirm(genderRef)
        }}
      >
        Confirm
      </Button>
    </div>
  )
}
