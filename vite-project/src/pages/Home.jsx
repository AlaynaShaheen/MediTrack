import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import About from '../components/About'
import Steps from '../components/Steps'
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Steps/>
      <main className='flex-grow'>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
