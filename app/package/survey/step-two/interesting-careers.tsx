import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'
import { handleConfirm } from '@/app/formData/functions'

interface InterestingCareersProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
  lifestyleRef: RefObject<HTMLInputElement | null>
}

export default function InterestingCareers({
  formData,
  setFormData,
  lifestyleRef,
}: InterestingCareersProp) {
  const [careers, setCareers] = useState(
    formData.career_interests.interesting_careers || []
  )
  const career_interests = formData.career_interests.interesting_careers

  const career_options = [
    {
      id: 'health',
      value: 'Health',
      icon: '🏥',
      bgColor: 'from-red-500/20 to-pink-500/20',
    },
    {
      id: 'business',
      value: 'Business',
      icon: '💼',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'technology',
      value: 'Technology',
      icon: '💻',
      bgColor: 'from-purple-500/20 to-indigo-500/20',
    },
    {
      id: 'education',
      value: 'Education',
      icon: '📚',
      bgColor: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      id: 'ngo',
      value: 'NGO',
      icon: '🤝',
      bgColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'government',
      value: 'Government',
      icon: '🏛️',
      bgColor: 'from-slate-500/20 to-gray-500/20',
    },
    {
      id: 'others',
      value: 'Others',
      icon: '✨',
      bgColor: 'from-violet-500/20 to-fuchsia-500/20',
    },
  ]

  const handleCareers = (id: string) => {
    const currentCareers = careers || []
    const newCareers = currentCareers.includes(id)
      ? currentCareers.filter(career => career !== id)
      : [...currentCareers, id]
    setCareers(newCareers)
  }

  const handleConfirmCareer = () => {
    setFormData({
      ...formData,
      career_interests: {
        ...formData.career_interests,
        interesting_careers: careers,
      },
    })
    handleConfirm(lifestyleRef)
  }

  return (
    <div className='w-full'>
      <section className='flex flex-col gap-10 items-center justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
          {career_options.map(item => (
            <div
              key={item.id}
              onClick={() => handleCareers(item.id)}
              className={`
                relative cursor-pointer rounded-xl p-7 transition-all duration-300
                flex flex-col items-center justify-center gap-4 w-55
                min-h-[180px] group
                ${
                  careers.includes(item.id)
                    ? 'border-2 border-lime-400 bg-lime-700 hover:bg-lime-800 scale-105'
                    : 'border-2 bg-primary/20 border-white/20 hover:bg-primary/30 hover:scale-105'
                }
              `}
              style={{
                boxShadow: careers.includes(item.id)
                  ? '0 8px 24px rgba(163, 230, 53, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 4px 16px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                transform: 'perspective(1000px) rotateX(1deg)',
              }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.bgColor} rounded-xl opacity-50`}
              />

              <div className='relative text-6xl mb-2 group-hover:scale-110 transition-transform'>
                {item.icon}
              </div>

              <div className='relative text-lg font-semibold text-center'>
                {item.value}
              </div>

              {careers.includes(item.id) && (
                <div className='absolute top-2 right-2 text-lime-400 text-2xl'>
                  ✓
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          variant='ghost'
          size='icon-sm'
          className={`
            w-fit px-6 py-2 text-sm rounded-lg
            bg-lime-600 hover:bg-lime-700 text-white font-medium
            transition-all duration-200
            ${careers.length < 1 ? 'hidden' : 'block'}
            ${careers.length !== career_interests.length ? 'block' : 'hidden'}
            ${career_interests.length > 0 ? 'border border-green-400' : ''}
            ${career_interests.length > 0 ? 'hidden' : 'block'}
          `}
          onClick={() => handleConfirmCareer()}
        >
          Confirm Selection
        </Button>
      </section>
    </div>
  )
}
