import React from 'react'
import { Link } from "react-router-dom"
import Lottie from 'lottie-react';
import Logo from '../../assets/Animation - 1697396002016.json'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <Link to="/" className='Logo'>
          <Lottie
            animationData={Logo}
            style={{ height: '55px', width: '55px' }}
          />
          Sakcham
        </Link>
      </div>
      <ul className='navcomp'>
        <li>
          <Link to="/Work" className='Work'>
            Work
          </Link>
        </li>
        <li>
          <Link to="/Contact" className='Contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
