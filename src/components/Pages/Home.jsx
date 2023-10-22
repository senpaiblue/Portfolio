import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Work from '../Card/Work'
import Skills from '../Skills/Skills'
import Info from '../Information/Info'
import Footer from '../Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='Portfolio'>
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Info />
      <Footer />
    </div>
  )
}

export default Home
