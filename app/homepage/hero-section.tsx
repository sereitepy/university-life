import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background'
// import '/node_modules/flag-icons/css/flag-icons.min.css'

const HeroSection = () => {
  return (
    <div className=''>
      <AuroraBackground>
        <div className='relative flex flex-col gap-4 items-center justify-center px-4 pt-20'>
          <div className='text-3xl text-left md:text-7xl font-bold text-neutral-300 dark:text-white text-center-10'>
            Welcome to University Life 🥳
          </div>
          <div className='font-extralight text-base md:text-4xl text-neutral-200 py-4'>
            A community that is made for upcoming/current university students in Cambodia
            <span className='fi fi-kh'></span>
          </div>
          <button
            className='active:bg-white/20 cursor-pointer hover:bg-primary hover:inset-shadow-sm transition-transform delay-250 duration-400 ease-in hover:inset-shadow-background active:shadow-2xs active:backdrop-blur-3xl bg-white/10 inset-shadow-neutral-400 inset-shadow-sm

 hover:text-neutral-50 font-semibold dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'
          >
            Get your personal package
          </button>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default HeroSection
