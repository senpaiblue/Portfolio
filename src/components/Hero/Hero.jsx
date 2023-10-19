import React from 'react'
import './Hero.css'
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation - 1697396165072.json'

const Hero = () => {
  const options = {
    preserveAspectRatio: 'xMidYMid meet'
  }
  return (
    <div className='main'>
      <div className='sub'>
        <div className='text'>
          <h3 className='headingStyle'>Namaste (Hello), I’m Sakcham.</h3>
          <h1 className='h1Style'>Designer & Developer by Day,</h1>
          <h1 className='h1Styles'>Otaku by Night </h1>
          <h5 className='description'>I’m based in India, from being an product designer to a frontend developer, for 1 year I’ve been focusing on crafting digital products with a strong focus on visuals and Interfaces.
          </h5>
        </div>
        <div className='right'>

          <Lottie
            options={options}
            animationData={animationData}
            style={{ height: '500px', width: '500px' }}
          />
        </div>
      </div>

    </div>
  )
}

export default Hero
