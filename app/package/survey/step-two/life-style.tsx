import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { handleConfirm } from '@/app/formData/functions'

interface LifeStyleProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  lifestyleRef: RefObject<HTMLInputElement | null>
}

export default function LifeStyle({
  formData,
  setFormData,
  lifestyleRef,
}: LifeStyleProp) {
  const [lifestyles, setLifestyles] = useState(
    formData.career_interests.lifestyle || []
  )
  const career_lifestyle = formData.career_interests.lifestyle
  const lifestyle_options = [
    {
      id: 'working-independently',
      value: 'Working Independently',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
      bgColor: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 'collaborative-environment',
      value: 'A Collaborative Environment',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
      bgColor: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'frequent-travel',
      value: 'Frequent Travel',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s',
      bgColor: 'from-orange-500/20 to-red-500/20',
    },
  ]

  const handleLifestyles = (id: string) => {
    const currentLifestyles = lifestyles || []
    const newLifestyles = currentLifestyles.includes(id)
      ? currentLifestyles.filter(lifestyle => lifestyle !== id)
      : [...currentLifestyles, id]
    setLifestyles(newLifestyles)
  }

  const handleConfirmLifestyle = () => {
    setFormData({
      ...formData,
      career_interests: {
        ...formData.career_interests,
        lifestyle: lifestyles,
      },
    })
    handleConfirm(lifestyleRef)
  }

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <section className='flex flex-col gap-10 items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {lifestyle_options.map(item => (
            <div
              key={item.id}
              onClick={() => handleLifestyles(item.id)}
              className={`
                relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300
                flex flex-col items-center justify-center
                min-h-60 group
                ${
                  lifestyles.includes(item.id)
                    ? 'border-2 border-lime-400 scale-105 ring-4 ring-lime-400/50'
                    : 'border-2 border-white/20 hover:scale-105 hover:border-white/40'
                }
              `}
              style={{
                boxShadow: lifestyles.includes(item.id)
                  ? '0 8px 24px rgba(163, 230, 53, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 4px 16px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Background Image */}
              <div className='absolute inset-0'>
                <Image
                  src={item.imageUrl}
                  alt={item.value}
                  width={200}
                  height={140}
                  className='w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity'
                />
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.bgColor}`}
                />
              </div>

              {/* Overlay gradient for better text readability */}
              <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent' />

              {/* Content */}
              <div className='relative z-10 flex flex-col items-center justify-center gap-4 p-6 text-center'>
                <div className='text-xl font-bold text-white drop-shadow-lg'>
                  {item.value}
                </div>
              </div>

              {/* Checkmark indicator */}
              {lifestyles.includes(item.id) && (
                <div className='absolute top-3 right-3 bg-lime-400 rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-lg shadow-lg z-20'>
                  ✓
                </div>
              )}

              {/* Hover overlay */}
              <div className='absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors' />
            </div>
          ))}
        </div>

        <div className='flex gap-4 text-sm text-white/70'>
          <div>Confirmed Lifestyles: {career_lifestyle.length}</div>
          <div>Selected: {lifestyles.length}</div>
        </div>

        <Button
          variant='ghost'
          size='icon-sm'
          className={`
            w-fit px-6 py-2 text-sm rounded-lg
            bg-lime-600 hover:bg-lime-700 text-white font-medium
            transition-all duration-200
            ${lifestyles.length < 1 ? 'hidden' : 'block'}
            ${
              lifestyles.length !== career_lifestyle.length ? 'block' : 'hidden'
            }
            ${career_lifestyle.length > 0 ? 'border border-green-400' : ''}
            ${career_lifestyle.length > 0 ? 'hidden' : 'block'}
          `}
          onClick={() => handleConfirmLifestyle()}
        >
          Confirm Selection
        </Button>
      </section>
    </div>
  )
}
