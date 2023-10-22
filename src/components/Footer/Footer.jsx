import React from 'react'
import Linkedin from '../../assets/Linkedin.svg'
import GitHub from '../../assets/GitHub.svg'
import Twitter from '../../assets/Twitter.svg'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer-Main'>
      <div className='Inner'>
        <h1 className='Txt'>Sakcham Singh</h1>
        </div>
        <div className='Icons'>
          <a href='https://www.linkedin.com/in/sakcham-singh-b45a7721a/' target='_blank'>
            <img src= {Linkedin} />
            </a>
          <a href='https://github.com/senpaiblue' target='_blank'>
            <img src={GitHub}/>
            </a>
          <a href='https://twitter.com/SakchamSingh07' target='_blank'>
            <img src={Twitter}/>
          </a>
        </div>
      </div>
  )
}

export default Footer;