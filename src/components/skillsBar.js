import { useState } from "react";

import { detailsFinder } from "../functions/skillsMapper";
import { genRand } from "../functions/random";

import Arrow from "../resources/icons/arrow.svg";

export default function SkillsBar(props) {
  const [skillsBarVisiblity, toggleSkillsBarVisibility] = useState(true);
  const skills = props.content.skillsSidebar;

  function skillSelect(skill) {
      console.log(skill)
      console.log(props.content)
  }

  return skillsBarVisiblity ? (
    <>
      <img
        src={Arrow}
        className="skillsToggler"
        style={{ transform: "scale(-1, -1)" }}
        alt="skills sidebar closer"
        title="skills sidebar closer"
        onClick={() => toggleSkillsBarVisibility(false)}
      />
      <div className="skillsSidebar">
        <p className="header">Skills</p>
        <p>
          Click on an item to be shown projects that I have made utilising that
          technology
        </p>
        <br />
        {skills.skillList.map((skill) => {
          const details = detailsFinder(skill);
          return (
            <div className="skillItem" key={genRand(3)}>
              <button
                className="skillButton"
                onClick={() => skillSelect(skill)}
              >
                <img
                  src={details.icon}
                  className="skillIcon skillIconBar"
                  alt={skill}
                  title={skill}
                />
                <p>{skill}</p>
              </button>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <>
      <img
        src={Arrow}
        className="skillsToggler"
        alt="skills sidebar opener"
        title="skills sidbar opener"
        onClick={() => toggleSkillsBarVisibility(true)}
      />
    </>
  );
}
