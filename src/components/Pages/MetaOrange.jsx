import React from 'react'
import MetaOrangeWorkImage from '../../assets/MetaOrangeWorkImage.svg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./MetaOrange.css"

const MetaOrange = () => {
  return (
    <div className='MetaOrangeWorkMain'>
      <Navbar />
      <div className='MetaOrangeWorkNegative'>
        <div className='MetaOrangeWorkZero'>
          <img src={MetaOrangeWorkImage} />
        </div>
        <div className='MetaOrangeWorkFirst'>
          <div className='MetaOrangeWorkSecond'>
            <h1 className='MetaOrangeWorkThird'>MetaOrange</h1>
          </div>
          <div className='MetaOrangeWorkFourth'>
            <p className='MetaOranngeWorkFifth'>
              I collaborated closely with our system design team,
              where I was actively involved in the creation of PowerApps,
              leveraging the expertise of an exceptionally talented group of professionals.
              One notable project included the design and development of a company brochure,
              which played a significant role during an event held in Adelaide and Sydney.
              The success of this endeavor highlighted our team's dedication and attention to detail,
              which greatly contributed to our company's achievements.
            </p>
            <a href='https://metaorangedigital.com/' target='_blank' className='default-button'> Know More </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MetaOrange
