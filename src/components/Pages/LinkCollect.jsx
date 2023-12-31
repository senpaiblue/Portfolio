import React from 'react';
import LinkCollectWorkPage from '../../assets/LinkCollectWorkImage.svg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './LinkCollect.css'

const LinkCollect = () => {
  return (
    <div className='WorkPageMain'>
      <Navbar />
      <div className='WorkPageSecond'>
        <img src={LinkCollectWorkPage} alt="Link Collect Work Page" />
        <div className='WorkPageThird'>
          <h1 className='WorkPageFourth'>
            LinkCollect
          </h1>
          <div className='WorkPageSixth'>
          <p className='WorkPageFifth'>I had the honor of being one of the founding members of the design team at LinkCollect, a
            powerful web bookmarking extension. My primary responsibility involved crafting the design
            for the extension, and I had the privilege of collaborating closely with the exceptionally talented individuals . It was a truly remarkable experience to work alongside such gifted individuals, and this project marked my first venture into designing a Chrome extension. </p>
           <a href='https://linkcollect.io/' target='_blank' className='default-button'> Know More </a>      
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LinkCollect;
