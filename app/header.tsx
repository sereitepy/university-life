const Header = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 font-semibold bg-pink-800 text-white dark:bg-pink-950'>
      <p className='text-lg'>ULife</p>
      <div className='flex items-center justify-between gap-5 transition-all duration-700 delay-700 ease-in-out'>
        <p className='underline-animate'>Universities</p>
        <p className='underline-animate'>Volunteerings</p>
        <p className='underline-animate'>Activites</p>
        <p className='underline-animate'>Courses</p>
        <p className='underline-animate'>Internships</p>
      </div>
      <div>More</div>
    </div>
  )
}

export default Header
