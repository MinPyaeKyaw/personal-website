import React from "react";

// Framer Motion
import TransitionAnimator from "../../components/TransitionAnimator";

// Components
import Title from "../../components/Title";
import { skillsOne, skillsTwo } from "../../services/skills";

export default function Skill() {
  return (
    <TransitionAnimator>
    <div className='skill_container'>
      <div className="skill_title">
        <Title title="Skills" />
      </div>
      <div className="skill_flexer">
        <div className="skill_imgWrapper">
          <img 
            className="skill_coder" 
            src={require('./../../assets/images/coder.svg').default} 
            alt="Sai Min Pyae Kyaw" />
        </div>
        <div className="skill_content">
          <div className="skill_items">
          {skillsOne.map((skill, i) => {
            return(<div key={i} className="skill_itemContainer">
              <img src={skill.logo} alt="skill" className="skill_contentLogo" />
              <div>{skill.name}</div>
            </div>)
          })}
          </div>
          <div className="skill_items">
          {skillsTwo.map((skill, i) => {
            return(<div key={i} className="skill_itemContainer">
              <img src={skill.logo} alt="skill" className="skill_contentLogo" />
              <div>{skill.name}</div>
            </div>)
          })}
          </div>
        </div>
      </div>
    </div>
    </TransitionAnimator>
  );
}
