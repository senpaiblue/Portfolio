import React from 'react';
import './Skills.css';

const Skill = ({ name, img }) => {
  return (
    <div className='SkillsMain'>
      <div className='Second'>
        <h3>{name}</h3>
      </div>
      <div className='Third'>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default Skill;
