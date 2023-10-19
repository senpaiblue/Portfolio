import React, {useState} from 'react';
import Card from './Card';
import LinkCollect from '../../assets/LinkCollect.png';
import Mama from '../../assets/Mama.png';
import MetaOrange from '../../assets/MetaOrange.png';
import Portfolio from '../../assets/Portfolio.png';
const cards = [
  {
    img: LinkCollect,
    footer: 'Product Designer at LinkCollect',
  },
  {
    img: Mama,
    footer: 'Lead Product Designer at Mama',
  },
  {
    img: MetaOrange,
    footer: 'System Design at MetaOrange',
  },
  {
    img: Portfolio,
    footer: 'Frontend on my portfolio',
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
          footer={card.footer}
          currentHovered={hoveredElement}
          handleChange={setHoveredElement}

        />
      ))}
    </div>
  </div>
  );
};

export default Work;
