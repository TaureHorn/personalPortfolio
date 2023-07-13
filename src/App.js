import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Content from "./data/content.json";

import AnimatedIntro from "./components/animatedIntro";
import HexGrid from "./components/hexgrid";
import Homepage from "./components/homepage";
import Section from "./components/section";
import Sidebar from "./components/sidebar";
import SkillsBar from "./components/skillsBar";

import { genRand } from "./functions/random";

export default function App() {
  const [introOver, setIntroOver] = useState(false);
  function routeMapper() {
    return Object.entries(Content.main).map((header) => {
      return (
        <Route
          path={header[1].metadata.url}
          key={genRand(3)}
          element={<Section content={header[1]} />}
        />
      );
    });
  }
  const mainContentRoutes = routeMapper();
  const [skillSpecificContent, setSkillSpecificContent] = useState("");
  return (
    <>
      <Sidebar content={Content} />
      <SkillsBar
        content={Content}
        specify={(skillSpecificContent) =>
          setSkillSpecificContent(skillSpecificContent)
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            introOver ? (
              <Homepage />
            ) : (
              <AnimatedIntro
                introOver={(introOver) => setIntroOver(introOver)}
              />
            )
          }
        />
        {mainContentRoutes}
        <Route path="/playground/" element={<HexGrid />} />
        <Route
          path="/skills/:skill"
          element={<Section content={skillSpecificContent} />}
        />
      </Routes>
    </>
  );
}
