import { useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom"

import "./App.scss";

import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="centerForced">
        <div style={{ textAlign: "justify" }}>
          <p style={{ fontWeight: "bold", fontStyle: "italic" }}>guten tag</p>
          Vulputate feugiat nisi elit dapibus velit{" "}
          <p>
            Molestie integer faucibus ut nunc dignissim nulla. Massa vel et,
            pretium lorem nisl tincidunt aenean bibendum, enim nec. Nec
            condimentum dui tortor dui. Enim suspendisse ac sit nunc dictumst
            amet ullamcorper pharetra lorem orci vestibulum ac vestibulum
            ullamcorper dolor auctor magna. Porttitor consectetur praesent
            suspendisse ac pulvinar mus laoreet suspendisse convallis nunc
            consectetur quisque consequat, tempor dignissim nulla porttitor ac
            eleifend dui. Lorem pellentesque tempus, dapibus sit vulputate
            natoque velit non tortor nam consequat maecenas metus, tristique
            donec vestibulum dapibus vel, ipsum arcu nullam vitae egestas nam
            justo nisl maecenas fermentum. Ridiculus pellentesque lectus
            pulvinar id odio massa maximus sed.
          </p>
        </div>
      </div>
      <Routes>
        <Route path="/projects" />
        <Route path="/bootcamp" />
        <Route path="/hobbies" />
      </Routes>
    </>
  );
}
