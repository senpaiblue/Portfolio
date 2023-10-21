import React from 'react';
import './Card.css';

const Card = ({ img, footer, header, Id, currentHovered, handleChange }) => {
  const colorArray = ["#6166F1", "#12AB69", "#FE4A07", "#FFFFFF"];
  const imageBorder={
    border: colorArray[Id],
  }
  const cardStyle = {
    borderColor: colorArray[Id],
    boxShadow: currentHovered === Id ? `0px 2px 20px 0px ${colorArray[Id]}` : `none`,
  };

  const handleMouseEnter = (index) => {
    handleChange(index);
  };

  const handleMouseLeave = () => {
    handleChange(null);
  };

  return (
    <div className="card" style={cardStyle} onMouseEnter={() => handleMouseEnter(Id)} onMouseLeave={handleMouseLeave}>
      <div className="card-body" style={imageBorder}>
        <img src={img} alt={footer} />
      </div>
      <div className="card-footer">
        <div className='HeaderOfH1'>
          <h1 className='cardH1'>{header}</h1>
          <div className='lower'>
            <p>{footer}</p>
          </div>
        </div>
        <div className='FindMore'>
          <div className='default-button'> Find More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
