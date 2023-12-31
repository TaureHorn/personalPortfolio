import { useState } from "react";

import "./App.scss";

import Content from "./data/content.json";

import AnimatedIntro from "./components/animatedIntro";
import Section from "./components/section";
import Sidebar from "./components/sidebar";

export default function App() {
  const [activeElement, updateActiveElement] = useState(<AnimatedIntro content={Content}/>);
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
    </>
  );
}
