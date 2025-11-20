import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className=''>
      <div className='relative h-70 w-full'>
        <Image
          fill={true}
          alt='group-of-students'
          src='/hero-image.jpg'
          className='object-cover overflow-clip transition-transform duration-300 transform hover:scale-115 peer'
        />
        <div className='absolute w-full h-full bg-black/20 backdrop-blur-xs flex items-center justify-center flex-col gap-3 peer-hover:opacity-100 pointer-events-none'>
          <h1
            className='text-4xl text-zinc-200 font-bold text-shadow-xs bg-white/40 rounded-2xl p-4 backdrop-blur-lg bg-blend-normal

'
          >
            Welcome to University Life!
          </h1>
          <p className='text-xl text-zinc-50'>
            Either you have just finished High School or is already in
            University, you are all welcomed here!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
