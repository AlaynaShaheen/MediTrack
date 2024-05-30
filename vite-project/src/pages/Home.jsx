import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='flex-grow'>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
