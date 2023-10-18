import React from 'react';
import './Skills.css';
import Skill from './Skill';
import FigmaLevel from '../assets/FigmaLevel.png';
import CanvaLevel from '../assets/CanvaLevel.png';
import CssLevel from '../assets/CssLevel.png';
import HtmlLevel from '../assets/HtmlLevel.png';
import ReactLevel from '../assets/ReactLevel.png';
import JavascriptLevel from '../assets/JavascriptLevel.png';

const skills = [
  {
    name: 'Figma',
    img: FigmaLevel,
  },
  {
    name: 'Canva',
    img: CanvaLevel,
  },
  {
    name: 'CSS',
    img: CssLevel,
  },
  {
    name: 'HTML',
    img: HtmlLevel,
  },
  {
    name: 'React',
    img: ReactLevel,
  },
  {
    name: 'Js',
    img: JavascriptLevel,
  }
];

const Skills = () => {
  return (
    <div className='SliderMain'>
      <div className='SliderSecond'>
        <h1>Skills</h1>
        <h5 className='h5Text'>Some skills that I’m good at.</h5>
      </div>
      <div className='Sliderthird'>
        {skills.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            img={skill.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
