import React from 'react';
import CV from '../../assets/cv.pdf'
import './Info.css'

const Info = () => {
  const email = "singhsakcham29@gmail.com";
  const cvUrl = CV;

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          console.log('Email copied to clipboard');
        })
        .catch(err => {
          console.error('Unable to copy email: ', err);
        });
    } else {
      // If the Clipboard API is not available, provide a fallback or inform the user
      console.error('Clipboard API is not supported');
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <h1>Contact</h1>
        <p>This is my contact information.</p>
      </div>
      <div className="section-body">
        <ul className='section-list'>
          <li className='Email-Section'> 
            <h1 className='Email'>My Email Id</h1>
            <a href="mailto:singhsakcham29@gmai.com" className='buttonNew' onClick={handleCopyEmail}>singhsakcham29@gmail.com</a>
          </li> 
          <li className='Twitter-Section'>
            <h1 className='Twitter'>Twitter</h1>
            <a href="https://twitter.com/SakchamSingh07" target='_blank' className='buttonNew'>Twitter</a>
          </li>
          <li className='CV-Section'>
            <h1 className='CV'>My CV</h1>
            <a href="https://drive.google.com/file/d/1C-mfECv3MNieqNUdYz3B7szKUjLccH3Y/view?usp=share_link" target='_blank'
            className='buttonNew' download>Open</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;

