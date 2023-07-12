import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Content from "./data/content.json";

import AnimatedIntro from "./components/animatedIntro";
import HexGrid from "./components/hexgrid";
import Homepage from "./components/homepage";
import Section from "./components/section";
import Sidebar from "./components/sidebar";

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
        {mainContentRoutes}
        <Route path="/playground" element={<HexGrid />} />
      </Routes>
    </>
  );
}
