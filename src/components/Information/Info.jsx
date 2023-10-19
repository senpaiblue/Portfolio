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
            <a href="#" className='default-button' onClick={handleCopyEmail}>Copy Email</a>
          </li> 
          <li className='Twitter-Section'>
            <h1 className='Twitter'>Twitter</h1>
            <a href="https://twitter.com/SakchamSingh07" className='default-button'>Twitter</a>
          </li>
          <li className='CV-Section'>
            <h1 className='CV'>My CV</h1>
            <a href={cvUrl} className='default-button' download>Download</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;

