
import React from 'react';
import './Skills.css';
import Skill from './Skill';
import FigmaLevel from '../../assets/FigmaLevel.svg';
import CanvaLevel from '../../assets/CanvaLevel.png';
import CssLevel from '../../assets/CssLevel.png';
import HtmlLevel from '../../assets/HtmlLevel.png';
import ReactLevel from '../../assets/ReactLevel.png';
import JavascriptLevel from '../../assets/JavascriptLevel.png';

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
  },
];

const Skills = () => {
  const skillMap = {
    Figma: FigmaLevel,
    Canva: CanvaLevel,
    CSS: CssLevel,
    HTML: HtmlLevel,
    React: ReactLevel,
    Js: JavascriptLevel,
  };

  return (
    <div className='SlideMain'>
      <div className='SliderSecond'>
        <h1>Skills</h1>
        <h5 className='h5Text'>Some skills that I’m good at.</h5>
      </div>
        <div className='SkillGrid'>
          <div className='SkillRow'>
            <Skill key={skills[0].name} name={skills[0].name} img={skillMap[skills[0].name]} />
            <Skill key={skills[1].name} name={skills[1].name} img={skillMap[skills[1].name]} />
          </div>
          <div className='SkillRow'>
            <Skill key={skills[2].name} name={skills[2].name} img={skillMap[skills[2].name]} />
            <Skill key={skills[3].name} name={skills[3].name} img={skillMap[skills[3].name]} />
          </div>
          <div className='SkillRow'>
            <Skill key={skills[4].name} name={skills[4].name} img={skillMap[skills[4].name]} />
            <Skill key={skills[5].name} name={skills[5].name} img={skillMap[skills[5].name]} />
          </div>
      </div>
    </div>
  );
};

export default Skills;
