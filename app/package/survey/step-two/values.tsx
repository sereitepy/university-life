import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'
import { handleConfirm } from '@/app/formData/functions'

interface ValuesProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  valueRef: RefObject<HTMLInputElement | null>
}

export default function Values({
  formData,
  setFormData,
  valueRef,
}: ValuesProp) {
  const [values, setValues] = useState(formData.career_interests.values || [])
  const career_values = formData.career_interests.values

  const value_options = [
    {
      id: 'income',
      value: 'Income',
    },
    {
      id: 'impact-on-society',
      value: 'Impact on Society',
    },
    {
      id: 'stability',
      value: 'Stability',
    },
    {
      id: 'work-life-balance',
      value: 'Work Life Balance',
    },
    {
      id: 'go-to-abroad',
      value: 'Go to Abroad',
    },
  ]

  const handleValues = (id: string) => {
    const currentValues = values || []
    console.log(currentValues)

    const newValues = currentValues.includes(id)
      ? currentValues.filter(value => value !== id)
      : [...currentValues, id]

    setValues(newValues)
  }

  const handleConfirmValue = () => {
    setFormData({
      ...formData,
      career_interests: {
        ...formData.career_interests,
        values: values,
      },
    })
  }

  const checkForDifference = () => {
    const career_valueLength = career_values.length
    const valueLength = values.length

    // if (career_valueLength === valueLength) {
    //   const form
    // }
  }

  return (
    <div>
      <section className='flex flex-col gap-10 items-center justify-center'>
        <div className='flex items-center justify-center gap-6 flex-wrap'>
          {value_options.map(item => (
            <div key={item.id}>
              <Button
                onClick={() => handleValues(item.id)}
                className={`p-8 ${
                  values.includes(item.id)
                    ? 'border-2 border-lime-400 bg-lime-700 hover:bg-lime-800'
                    : 'border-2 bg-primary/20  border-white/20 hover:bg-primary/30'
                }`}
                style={{
                  boxShadow:
                    '0 4px 16px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  transform: 'perspective(1000px) rotateX(1deg)',
                }}
              >
                {item.value}
              </Button>
            </div>
          ))}
        </div>
        <div>Career Values:{career_values.length}</div>
        <div>
          Values:
          {values.length}
        </div>
        <Button
          variant='ghost'
          size='icon-sm'
          className={`w-fit px-2 text-xs 
                ${values.length < 1 ? 'hidden' : 'block'}
                ${values.length !== career_values.length ? 'block' : 'hidden'}
                ${career_values.length > 0 ? 'border border-green-400' : ''}
                ${career_values.length > 0 ? 'hidden' : 'block'}
                `}
          onClick={() => handleConfirmValue()}
        >
          Confirm
        </Button>
      </section>
    </div>
  )
}
