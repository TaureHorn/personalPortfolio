import { useState } from "react";

import HexGrid from "./hexgrid";

// media
import Arrow from "../resources/icons/arrow.svg";
// custom functions
import { catString } from "../functions/catString";
import { genRand } from "../functions/random";

export default function Sidebar(props) {
  const [sidebarVisibility, toggleSidebarVisibility] = useState(true);
  const sidebar = props.content.sidebar;

  function linkMapper(json) {
    return json.map((link) => {
      return (
        <div className="linkContainer" key={genRand(4)}>
          <a
            className="subheader"
            href={link.url}
            rel="noreferrer"
            target="_blank"
          >
            <button className="skillButton">
              <img
                src={link.icon}
                className="icon"
                alt={link.text}
                title={link.text}
              />
              <p>{link.text}</p>
            </button>
          </a>
        </div>
      );
    });
  }
  function sectionMapper() {
    return Object.entries(props.content.main).map((header) => {
      if (header[1].data.length > 0) {
        return (
          <div key={genRand(4)}>
            <button
              className="skillButton"
              onClick={() => props.move(header[1])}
            >
              <span className="header">{header[0]}</span>
            </button>
            {header[1].data.length > 0 ? (
              <>
                <ul className="list padding subheader">
                  {header[1].data.map((subsection) => {
                    return (
                      <a
                        key={genRand(3)}
                        href={`#${catString(subsection.name, "-")}`}
                        onClick={() => props.move(header[1])}
                      >
                        <button className="skillButton">
                          <li>{subsection.name}</li>
                        </button>
                      </a>
                    );
                  })}
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      }
    });
  }
  return sidebarVisibility ? (
    <>
      <img
        src={Arrow}
        className="sidebarToggler"
        alt="sidebar closer"
        title="close sidebar"
        onClick={() => toggleSidebarVisibility(false)}
      />
      <div className=" sidebar">
        <div className="textCenter">
          <img
            src={sidebar.headshot}
            className="headshot"
            alt="headshot"
            title="hi!"
          />
          <p className="name">Alex Baird</p>
          <p className="subheader">full stack junior web developer</p>
          <div className="linkContainer">{linkMapper(sidebar.links)}</div>
        </div>
        <hr />
        {sectionMapper()}
          <button className="skillButton" onClick={() => props.setElement(<HexGrid />)}>
            <span className="header">playground</span>
          </button>
        <hr />
        <p className="header"> External Links</p>
        {linkMapper(sidebar.externalLinks)}
      </div>
    </>
  ) : (
    <>
      <img
        src={Arrow}
        style={{ transform: "rotate(180deg)" }}
        className="sidebarToggler"
        alt="sidebar opener"
        title="open sidebar"
        onClick={() => toggleSidebarVisibility(true)}
      />
    </>
  );
}
