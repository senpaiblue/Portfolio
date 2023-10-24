import React from 'react';
import './Skills.css';

const Skill = ({ name, img }) => {
  return (
    <div className='SkillsMain'>
      <div className='Second'>
        <h3 className='SkillName'>{name}</h3>
        <img className='SkillImage' src={img} alt={name} />
      </div>
    </div>
  );
}

export default Skill;
