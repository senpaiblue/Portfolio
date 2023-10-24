import React from 'react'
import Lottie from 'lottie-react'
import ContactGif from '../../assets/Animation - 1697995399296.json'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import TwitterIcon from '../../assets/Twitter.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'
import BehanceIcon from '../../assets/BehanceIcon.svg'
import GitHubIcon from '../../assets/GitHub.svg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='ContactZero'>
      <Navbar />
      <div className='ContactNegative'>
        <div className='ContactFirst'>
          <Lottie animationData={ContactGif} style={{ height: '500px', width: '500px' }} />
        </div>
        <div className='ContactNegativeFirst'>
          <div className='ContactSecond'>
            <h1>Contact</h1>
          </div>
          <div className='ContactThird'>
            <div className='ContactFourth'>
              <p className='ParaContent'>Do you have a project idea in mind? Are you looking to collaborate?
                Let's connect and turn your vision into a reality. Feel free to reach
                out and discuss how we can work together to achieve your goals.</p>
            </div>
            <div className='ContactFifth'>
              <a href='https://www.linkedin.com/in/sakcham-singh-b45a7721a/' target='_blank'>
                <img className='ContactPageIcons' src={LinkedinIcon} />
              </a>
              <a href='https://github.com/senpaiblue' target='_blank'>
                <img className='ContactPageIcons' src={GitHubIcon} />
              </a>
              <a href='https://twitter.com/SakchamSingh07' target='_blank'>
                <img className='ContactPageIcons' src={TwitterIcon} />
              </a>
              <a href='https://www.behance.net/sakchamsingh' target='_blank'>
                <img className='ContactPageIcons' src={BehanceIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
