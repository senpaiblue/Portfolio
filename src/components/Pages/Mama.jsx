import React from 'react'
import MamaWorkImage from '../../assets/MamaWorkImage.svg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Mama.css"

const Mama = () => {
  return (
    <div className='MamaWorkMain' >
      <Navbar />
      <div className='MamaWorkZero'>
        <div className='MamaWorkFirst'>
          <img src={MamaWorkImage} />
        </div>
        <div className='MamaWorkSecond'>
          <div className='MamaWorkThird'>
            <h1 className='MamaWorkFourth'>
              Mama
            </h1>
            <div className='MamaWorkSixth'>
            <p className='MamaWorkFifth'>
              I undertook the role of leading the redesign efforts for
              the Mama app and website. Additionally, I managed the creation
              and publication of social media content across platforms such as Instagram
              and Twitter. Furthermore, I played a pivotal role in the design of Mama's T-shirt
              merchandise.
            </p>
            <a href='https://www.chalak.co/' target='_blank' className='default-button'> Know More </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mama
