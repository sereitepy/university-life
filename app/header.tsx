const Header = () => {
  return (
    <div className='flex items-center justify-between font-semibold'>
      <div className='flex items-center justify-center gap-10'>
        <div className='text-neutral-200'>More</div>
        <div className='flex items-center justify-between gap-5 text-neutral-200 transition-all duration-700 delay-700 ease-in-out'>
          <p className='underline-animate'>Universities</p>
          <p className='underline-animate'>Volunteerings</p>
          <p className='underline-animate'>Activites</p>
          <p className='underline-animate'>Courses</p>
          <p className='underline-animate'>Internships</p>
        </div>
      </div>
      <p className='text-lg text-neutral-50'>ULife</p>
    </div>
  )
}

export default Header
