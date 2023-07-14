import { useState } from "react";

import "./App.scss";

import Content from "./data/content.json";

import AnimatedIntro from "./components/animatedIntro";
import Section from "./components/section";
import Sidebar from "./components/sidebar";
import SkillsBar from "./components/skillsBar";

export default function App() {
  const [activeElement, updateActiveElement] = useState(<AnimatedIntro />);
  function sectionMapper(input) {
    const element = <Section content={input} />;
    updateActiveElement(element);
  }
  return (
    <>
      <Sidebar
        content={Content}
        move={sectionMapper}
        setElement={(activeElement) => updateActiveElement(activeElement)}
      />
      {activeElement}
      <SkillsBar skillList={Content.skillsSidebar.skillList} />
    </>
  );
}
