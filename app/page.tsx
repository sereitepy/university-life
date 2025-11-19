import Header from './header'
import HeroSection from './homepage/hero-section'

const Home = () => {
  return (
    <div className='bg-zinc-50 font-sans dark:bg-black'>
      <Header />
      <div className=''>
        <HeroSection />
      </div>
    </div>
  )
}

export default Home
