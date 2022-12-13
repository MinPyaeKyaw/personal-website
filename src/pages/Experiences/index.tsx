import React from "react";

// Components
import Exp from "../../components/Exp";
import Title from "../../components/Title";

// Services
import { exps } from "../../services/exps";

// Framer Motion
import TransitionAnimator from "../../components/TransitionAnimator";

export default function Experiences() {
  return (
    <TransitionAnimator>
    <div className="exp_container">
      <div>
        <Title title="Experiences" />
      </div>

      <div className="exp_flexer">
        <div className="exp_contentContainer">
          {exps.map((exp) => {
            return <Exp key={exp.id} cmp={exp.cmp} position={exp.position} duration={exp.duration} desc={exp.desc} />
          })}
        </div>
        <div className="exp_imgWrapper">
          <img className="exp_img" alt="Experiences" src={require('./../../assets/images/exp.svg').default} />
        </div>
      </div>
    </div>
    </TransitionAnimator>
  );
}
