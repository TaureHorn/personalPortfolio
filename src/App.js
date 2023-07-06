import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Content from "./data/content.json";

import AnimatedIntro from "./components/animatedIntro";
import Homepage from "./components/homepage";
import Section from "./components/section";
import Sidebar from "./components/sidebar";

import { genRand } from "./functions/random";

export default function App() {
  const [introOver, setIntroOver] = useState(false);
  const routes = () => {
    return Object.entries(Content.main).map((header) => {
      console.log(header);
      return (
        <Route
          path={header[1].metadata.url}
          key={genRand(3)}
          element={<Section content={header} />}
        />
      );
    });
  };
  return (
    <>
      <Sidebar content={Content} />
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
        {routes()}
      </Routes>
    </>
  );
}
