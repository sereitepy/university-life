import { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'
import { handleConfirm } from '@/app/formData/functions'
import Image from 'next/image'

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
  const [interests, setInterests] = useState(
    formData.career_interests.interesting_careers || []
  )
  const career_interests = formData.career_interests.interesting_careers

  const industry_options = [
    {
      id: 'health',
      value: 'Health',
      icon: '🏥',
      bgColor: 'from-red-500/20 to-pink-500/20',
      image: 'health-industry.jpg',
    },
    {
      id: 'business',
      value: 'Business',
      icon: '💼',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      image: 'business-company.jpg',
    },
    {
      id: 'technology',
      value: 'Technology',
      icon: '💻',
      bgColor: 'from-purple-500/20 to-indigo-500/20',
      image: 'technology-robots.jpg',
    },
    {
      id: 'education',
      value: 'Education',
      icon: '📚',
      bgColor: 'from-yellow-500/20 to-orange-500/20',
      image: 'education-school.jpg',
    },
    {
      id: 'ngo',
      value: 'NGO',
      icon: '🤝',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      image: 'ngo-meetings.jpg',
    },
    {
      id: 'government',
      value: 'Government',
      icon: '🏛️',
      bgColor: 'from-slate-500/20 to-gray-500/20',
      image: 'government.jpg',
    },
    {
      id: 'agriculture',
      value: 'Agriculture & Environment',
      icon: '🌾',
      bgColor: 'from-lime-500/20 to-green-500/20',
      image: 'agriculture-environment.jpg',
    },
    {
      id: 'tourism',
      value: 'Tourism & Hospitality',
      icon: '🏨',
      bgColor: 'from-amber-500/20 to-orange-500/20',
      image: 'tourism-hospitality.jpg',
    },
    {
      id: 'engineering',
      value: 'Engineering & Construction',
      icon: '🏗️',
      bgColor: 'from-stone-500/20 to-zinc-500/20',
      image: 'engineering-construction.jpg',
    },
    {
      id: 'finance',
      value: 'Finance & Banking',
      icon: '💰',
      bgColor: 'from-emerald-500/20 to-teal-500/20',
      image: 'finance-banking.jpg',
    },
    {
      id: 'arts',
      value: 'Arts & Creative Industries',
      icon: '🎨',
      bgColor: 'from-pink-500/20 to-rose-500/20',
      image: 'arts-creative.jpg',
    },
    {
      id: 'law',
      value: 'Law & Legal Services',
      icon: '⚖️',
      bgColor: 'from-indigo-500/20 to-blue-500/20',
      image: 'law-legal.jpg',
    },
  ]

  const handleCareerInterests = (id: string) => {
    const currentInterests = interests || []
    const newCareers = currentInterests.includes(id)
      ? currentInterests.filter(career => career !== id)
      : [...currentInterests, id]
    setInterests(newCareers)
  }

  const handleConfirmCareer = () => {
    setFormData({
      ...formData,
      career_interests: {
        ...formData.career_interests,
        interesting_careers: interests,
      },
    })
    handleConfirm(lifestyleRef)
  }

  return (
    <div className='w-full'>
      <section className='w-full flex flex-col gap-10 items-center justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
          {industry_options.map(item => (
            <div
              key={item.id}
              onClick={() => handleCareerInterests(item.id)}
              className={`
                            relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300
                            flex flex-col items-center justify-center
                            min-h-45 group
                            ${
                              interests.includes(item.id)
                                ? 'border-2 border-lime-400 scale-105 ring-4 ring-lime-400/50'
                                : 'border-2 border-white/20 hover:scale-105 hover:border-white/40'
                            }
                          `}
              style={{
                boxShadow: interests.includes(item.id)
                  ? '0 8px 24px rgba(163, 230, 53, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 4px 16px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Background Image */}
              <div className='absolute inset-0'>
                <Image
                  src={`/images/${item.image}`}
                  alt={item.value}
                  width={200}
                  height={140}
                  className='w-full h-full object-cover opacity-100 transition-opacity ease-in-out duration-200'
                />
                <div
                  className={`absolute inset-0 group-hover:hidden bg-linear-to-br ${item.bgColor}`}
                />
              </div>

              {/* Overlay gradient for better text readability */}
              <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent' />

              {/* Content */}
              <div className='absolute bottom-1 z-10 gap-4 p-3'>
                <div className='text-xl flex items-center gap-2 font-bold text-white drop-shadow-lg'>
                  {item.value}
                  <span>{item.icon}</span>
                </div>
              </div>

              {/* Checkmark indicator */}
              {interests.includes(item.id) && (
                <div className='absolute top-3 right-3 bg-lime-400 rounded-full w-8 h-8 flex items-center justify-center text-black font-bold text-lg shadow-lg z-20 group-hover:opacity-100'>
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
            ${interests.length < 1 ? 'hidden' : 'block'}
            ${interests.length !== career_interests.length ? 'block' : 'hidden'}
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
