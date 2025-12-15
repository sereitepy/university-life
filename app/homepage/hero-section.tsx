'use client'
import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background'
// import '/node_modules/flag-icons/css/flag-icons.min.css'
import { useState } from 'react'
import Package from '../package'
import { FormData } from '../formData'

const HeroSection = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    personal: {
      age: '',
      gender: '',
      grade: '',
      highschool: '',
      family_economic: '',
      graduation_year: undefined,
      bacII_grade: undefined,
      academic_performance: '',
    },
    career_interests: {
      values: [],
      willing_work_abroad: '',
      interesting_careers: [],
      lifestyle: [],
      plan_after_graduation: '',
      internship_importance: 3,
    },
    academic: {
      preferred_learning_style: '',
      hobbies: [],
      interested_subjects: [],
      extracurricular: [],
      influence: [],
    },
    campus: {
      study_location: '',
      campus_importance: 3,
      facilities_importance: {
        clubs: 3,
        class_sizes: 3,
        labs: 3,
        library: 3,
        workshop: 3,
        tutoring: 3,
        canteen: 3,
        study_room: 3,
        cafe: 3,
      },
      flexible_schedule_importance: 3,
    },
    financial: {
      budget: '',
      volunteer_internship: '',
      scholarship_need: '',
    },
  })
  return (
    <div className=''>
      <AuroraBackground>
        <div className='relative flex flex-col gap-4 items-center justify-center px-4 pt-5'>
          <div className='text-3xl text-left md:text-5xl lg:text-6xl font-bold text-neutral-300 dark:text-white text-center-10'>
            Welcome to University Life 🥳
          </div>
          <div className='font-extralight text-base md:text-3xl 2xl:text-4xl text-neutral-200 py-4'>
            A community that is made for upcoming/current university students in
            Cambodia
            <span className='fi fi-kh'></span>
          </div>
          <Package
            open={open}
            setOpen={setOpen}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </AuroraBackground>
    </div>
  )
}

export default HeroSection
