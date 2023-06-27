import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import AnimatedIntro from "./components/animatedIntro";
import Homepage from "./components/homepage";
import Sidebar from "./components/sidebar";

export default function App() {
  const [introOver, setIntroOver] = useState(false);
  return (
    <>
      <Sidebar />
      {introOver ? (
        <>
          <Homepage />
        </>
      ) : (
        <AnimatedIntro introOver={(introOver) => setIntroOver(introOver)} />
      )}
      <Routes>
        <Route path="/projects" />
        <Route path="/bootcamp" />
        <Route path="/hobbies" />
      </Routes>
    </>
  );
}
