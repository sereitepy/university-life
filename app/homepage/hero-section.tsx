'use client'
import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background'
// import '/node_modules/flag-icons/css/flag-icons.min.css'
import { useState } from 'react'
import Package from '../package'

const HeroSection = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    name: '',
    age: '',
    school: '',
    
  })
  return (
    <div className=''>
      <AuroraBackground>
        <div className='relative flex flex-col gap-4 items-center justify-center px-4 pt-20'>
          <div className='text-3xl text-left md:text-7xl font-bold text-neutral-300 dark:text-white text-center-10'>
            Welcome to University Life 🥳
          </div>
          <div className='font-extralight text-base md:text-4xl text-neutral-200 py-4'>
            A community that is made for upcoming/current university students in
            Cambodia
            <span className='fi fi-kh'></span>
          </div>
          <Package open={open} setOpen={setOpen} />
        </div>
      </AuroraBackground>
    </div>
  )
}

export default HeroSection
