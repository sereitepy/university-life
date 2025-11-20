import Header from './header'
import Description from './homepage/description'
import HeroSection from './homepage/hero-section'

const Home = () => {
  return (
    <div className='bg-zinc-50 font-sans dark:bg-black'>
      <Header />
      <div className='overflow-hidden h-70'>
        <HeroSection />
      </div>
      <Description />
    </div>
  )
}

export default Home
