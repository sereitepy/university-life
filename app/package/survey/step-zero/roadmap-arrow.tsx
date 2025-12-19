import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import {
  BookOpen,
  BriefcaseBusiness,
  CircleDollarSign,
  School,
  UserRound,
} from 'lucide-react'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, SplitText)

interface RoadmapArrowProps {
  animationDelay?: number
}

const RoadmapArrow = ({ animationDelay }: RoadmapArrowProps) => {
  const steps = [
    {
      icon: UserRound,
      title: 'Personal',
      description: 'Understanding who you are',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Career Interests',
      description: 'Lifestyle after graduation',
    },
    {
      icon: BookOpen,
      title: 'Academic',
      description: 'Interested Subjects and study strengths',
    },
    {
      icon: School,
      title: 'Campus',
      description: 'University campus environments',
    },
    {
      icon: CircleDollarSign,
      title: 'Financial',
      description: 'Scholarship offers',
    },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      gsap.set('.roadmap-card', { autoAlpha: 0, x: 50 })
      gsap.set('.connecting-line', { opacity: 0 })

      requestAnimationFrame(() => {
        const tl = gsap.timeline({ delay: animationDelay })

        tl.to('.roadmap-card', {
          x: 0,
          autoAlpha: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform',
        }).to(
          '.connecting-line',
          {
            opacity: 1,
            duration: 1,
          },
          '+=0.5'
        )
      })
    },
    { scope: containerRef }
  )

  return (
    <div className='py-12 flex items-center justify-center'>
      <div className='w-full'>
        <h1 className='split text-2xl font-bold text-white text-center mb-10'>
          Package Roadmap
        </h1>

        <div ref={containerRef} className='relative'>
          {/* Connecting line */}
          <div
            className='connecting-line absolute top-17 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-purple-400 to-pink-500 -z-10'
            style={{
              boxShadow:
                '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)',
            }}
          />

          <div className='grid grid-cols-5 gap-10 relative'>
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className='roadmap-card relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-purple-400/50  hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 items-center justify-center flex flex-col
                  '
                  style={{
                    boxShadow:
                      '0 8px 32px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    // transform: 'perspective(1000px) rotateX(2deg)',
                  }}
                >
                  {/* Step Number */}
                  <div
                    className='absolute -top-3 -left-3 w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg'
                    style={{
                      boxShadow:
                        '0 4px 20px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className='flex flex-col items-center'>
                    <div className='w-8 h-8 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-2 shadow-lg'>
                      <Icon className='w-4 h-4 text-purple-300' />
                    </div>
                    <h3 className='text-base font-bold text-white text-center'>
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className='text-slate-300 text-xs leading-relaxed text-center'>
                    {step.description}
                  </p>

                  {/* 3D effect accent */}
                  <div className='absolute inset-0 rounded-xl bg-linear-to-br from-purple-500/5 to-transparent pointer-events-none' />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapArrow
