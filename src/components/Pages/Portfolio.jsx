import React from 'react'
import PortfolioWorkImage from '../../assets/PortfolioWorkImage.svg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div className='PortfolioWorkMain'>
      <Navbar />
      <div className='PortfolioWorkNegative'>
        <div className='PortfolioWorkZero'>
          <img src={PortfolioWorkImage} />
        </div>
        <div className='PortfolioWorkFirst'>
          <div className='PortfolioWorkSecond'>
            <h1 className='PortfolioWorkThird'>Portfolio</h1>
          </div>
          <div className='PortfolioWorkFourth'>
            <p className='PortfolioWorkFifth'>
              I meticulously coded each element of my portfolio,
              beginning with the initial design in Figma and seamlessly
              transitioning to React for the development of the corresponding components.
              Throughout the process, I encountered challenges that served as valuable
              learning opportunities, and my determination to overcome them was unwavering.
              This iterative process, from design conception to bringing my creations to life,
              is a journey that I truly cherish and find immensely rewarding.
            </p>
            <a href='https://github.com/senpaiblue/Portfolio' target='_blank' className='default-button'> Know More </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
