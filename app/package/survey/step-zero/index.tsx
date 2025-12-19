import { Dispatch, SetStateAction, useRef } from 'react'
import { FormData } from '@/app/formData'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import RoadmapArrow from './roadmap-arrow'
import StudentStatus from './student-status'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, SplitText)

interface StepZeroProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StepZero({ formData, setFormData }: StepZeroProp) {
  const containerRef = useRef<HTMLDivElement>(null)
  const splitInstancesRef = useRef<SplitText[]>([])

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Set initial states
      gsap.set('.student-status-section', { autoAlpha: 0, y: 30 })

      requestAnimationFrame(() => {
        const tl = gsap.timeline()

        // Animate split text elements
        const splitElements = containerRef.current!.querySelectorAll('.split')

        splitElements.forEach((element, index) => {
          const split = new SplitText(element as HTMLElement, {
            type: 'words,lines',
            linesClass: 'line',
          })
          splitInstancesRef.current.push(split)

          // Make the parent visible, but lines start hidden
          gsap.set(element, { autoAlpha: 1 })
          gsap.set(split.lines, { yPercent: 100, autoAlpha: 0 })

          tl.to(
            split.lines,
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.4,
              stagger: 0.01,
              ease: 'expo.out',
            },
            index === 0 ? 0 : '-=0.3'
          )
        })

        // Animate student status section last
        tl.to('.student-status-section', {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className='flex flex-col gap-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <DialogTitle className='split text-4xl font-bold'>
          Welcome to your personal package!
        </DialogTitle>
        <DialogDescription className='split text-lg'>
          You have to honestly select answers that best aligned to you most
        </DialogDescription>
      </div>

      <RoadmapArrow animationDelay={0.5} />

      <section className='student-status-section flex flex-col items-center justify-center gap-10'>
        <h1 className='split font-bold text-2xl'>
          Please select the one that best describes you
        </h1>
        <div className='student-status-section '>
          <StudentStatus formData={formData} setFormData={setFormData} />
        </div>
      </section>
    </div>
  )
}
