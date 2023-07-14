import { useState } from "react";

import { detailsFinder } from "../functions/skillsMapper";
import { genRand } from "../functions/random";

import Arrow from "../resources/icons/arrow.svg";

export default function SkillsBar(props) {
  const [skillsBarVisiblity, toggleSkillsBarVisibility] = useState(true);
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
        <p>glossary/links</p>
        {props.skillList.map((skill) => {
          const details = detailsFinder(skill);
          return (
            <div className="skillItem" key={genRand(3)}>
              <a href={details.href} target="_blank" rel="noreferrer">
                <button className="skillButton">
                  <img
                    src={details.icon}
                    className="skillIconBar"
                    alt={skill}
                    title={skill}
                  />
                  <p>{skill}</p>
                </button>
              </a>
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
