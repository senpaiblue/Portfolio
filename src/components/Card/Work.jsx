import React, { useState } from 'react';
import Card from './Card';
import LinkCollect from '../../assets/LinkCollect.svg';
import Mama from '../../assets/Mama.svg';
import MetaOrange from '../../assets/MetaOrange.svg';
import Portfolio from '../../assets/Portfolio.svg';
const cards = [
   {
      img: LinkCollect,
      header: 'Linkcollect',
      footer: 'Product Designer (1500+ Users), Buildspace round of 16',
      somePage: '/linkcollect'
   },
   {
      img: Mama,
      header: 'Mama',
      footer: 'Lead Product Designer at Mama (1000+ Users)',
      somePage: '/mama'
   },
   {
      img: MetaOrange,
      header: 'MetaOrange',
      footer: 'System Design at MetaOrange',
      somePage: '/metaorange'
   },
   {
      img: Portfolio,
      header: 'Portfolio',
      footer: 'Frontend on my portfolio',
      somePage: '/portfolio'
   },
];


const Work = () => {
   const [hoveredElement, setHoveredElement] = useState(null);


   return (<div>
      <div className='Main'>
         <h1>Work</h1>
         <p>Here are some of the projects I've worked on.</p>
      </div>
      <div className="cards">
         {cards.map((card, Id) => (
            <Card
               Id={Id}
               key={card.img}
               img={card.img}
               header={card.header}
               footer={card.footer}
               somePage={card.somePage}
               currentHovered={hoveredElement}
               handleChange={setHoveredElement}

            />
         ))}
      </div>
   </div>
   );
};

export default Work;
