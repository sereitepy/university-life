import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { handleConfirm } from '@/app/formData/functions'

interface GraduationYearProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  bacIIRef: RefObject<HTMLInputElement | null>
}

export default function GraduationYear({
  formData,
  setFormData,
  bacIIRef,
}: GraduationYearProp) {
  const [year, setYear] = useState<string>(
    formData.personal.graduation_year?.toString() || '2026'
  )
  const minYear = 2000
  const maxYear = 2040

  const handleYearChange = (newYear: string) => {
    setYear(newYear)
  }

  const decrementYear = () => {
    const currentYear = parseInt(year) || 2024
    if (currentYear > minYear) {
      handleYearChange((currentYear - 1).toString())
    }
  }

  const incrementYear = () => {
    const currentYear = parseInt(year) || 2024
    if (currentYear < maxYear) {
      handleYearChange((currentYear + 1).toString())
    }
  }

  return (
    <div className='relative flex items-center gap-4'>
      <Button
        className='p-1 bg-primary/20 border border-primary/50'
        size='icon-sm'
        onClick={decrementYear}
        disabled={!formData.personal.highschool}
      >
        <ArrowLeftIcon size={20} weight='bold' />
      </Button>
      <input
        type='number'
        placeholder='2026'
        value={year}
        className='remove-arrow text-4xl text-center w-32'
        min={minYear}
        max={maxYear}
        disabled={!formData.personal.highschool}
        onChange={e => handleYearChange(e.target.value)}
      />
      <Button
        className='p-1 bg-primary/20 border border-primary/50'
        size='icon-sm'
        onClick={incrementYear}
        disabled={!formData.personal.highschool}
      >
        <ArrowRightIcon size={20} weight='bold' />
      </Button>
      <Button
        variant='ghost'
        size='icon-sm'
        disabled={!formData.personal.highschool}
        className={`w-fit px-2 text-xs absolute -right-25 
        ${!formData.personal.highschool ? 'hidden' : 'block'}
        ${
          formData.personal.graduation_year === year &&
          'border border-green-400'
        }
        ${formData.personal.graduation_year === year && 'hidden'}
        `}
        onClick={() => {
          setFormData({
            ...formData,
            personal: {
              ...formData.personal,
              graduation_year: year,
            },
          })
          handleConfirm(bacIIRef)
        }}
      >
        Confirm
      </Button>
    </div>
  )
}
