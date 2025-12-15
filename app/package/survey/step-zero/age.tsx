import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { Dispatch, SetStateAction } from "react"
import { FormData } from "@/app/formData"

interface AgeProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function Age({ formData, setFormData }: AgeProp) {
  const minAge = 13
  const maxAge = 60
  const minus = parseInt(formData.personal.age) - 1
  const plus = parseInt(formData.personal.age) + 1
  return (
    <div className='flex gap-5 transition-all duration-200 ease-in-out'>
      <Button
        className='p-1 bg-primary/20 border border-primary/50'
        size='icon-sm'
        onClick={() => {
          if (parseInt(formData.personal.age) >= minAge) {
            setFormData({
              ...formData,
              personal: {
                ...formData.personal,
                age: minus.toString()
              },
            })
          }
        }}
      >
        <ArrowLeftIcon size={20} weight='bold' />
      </Button>

      {/* Age */}
      <div className='text-2xl font-semibold w-10 mx-auto flex items-center justify-center'>
        <input
          type='number'
          placeholder='18'
          className='w-10 mx-auto remove-arrow text-center'
          value={formData.personal.age}
          onChange={e =>
            setFormData({
              ...formData,
              personal: {
                ...formData.personal,
                age: e.target.value,
              },
            })
          }
        />
      </div>
      <Button
        className='p-1 bg-primary/20 border border-primary/50'
        size='icon-sm'
        onClick={() => {
          if (parseInt(formData.personal.age) < maxAge) {
            setFormData({
              ...formData,
              personal: {
                ...formData.personal,
                age: plus.toString(),
              },
            })
          }
        }}
      >
        <ArrowRightIcon size={20} weight='bold' />
      </Button>
    </div>
  )
}
