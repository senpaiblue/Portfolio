import React from 'react';
import './Card.css';

const Card = ({ img, footer, Id, currentHovered, handleChange }) => {
  const colorArray = ["#6166F1", "#12AB69", "#FE4A07", "#FFFFFF"];
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
    <div className="card" onMouseEnter={() => handleMouseEnter(Id)} onMouseLeave={handleMouseLeave}>
      <div className="card-body" style={cardStyle}>
        <img src={img} alt={footer} />
      </div>
      <div className="card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default Card;
