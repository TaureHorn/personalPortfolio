import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import AnimatedIntro from "./components/animatedIntro";
import HexGrid from "./components/hexgrid";
import Homepage from "./components/homepage";
import Sidebar from "./components/sidebar";

export default function App() {
  const [introOver, setIntroOver] = useState(false);
  return (
    <>
      <Sidebar />
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
        <Route path="/projects" />
        <Route path="/bootcamp" />
        <Route path="/hobbies" />
        <Route path="/playground" element={<HexGrid />} />
      </Routes>
    </>
  );
}
