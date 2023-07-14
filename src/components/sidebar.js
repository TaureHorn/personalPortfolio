import { useState } from "react";

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
          <img
            src={link.icon}
            className="icon"
            alt={link.text}
            title={link.text}
          />
          <a
            className="subheader"
            href={link.url}
            rel="noreferrer"
            target="_blank"
          >
            <button className="skillButton">{link.text}</button>
          </a>
        </div>
      );
    });
  }
  function sectionMapper() {
    return Object.entries(props.content.main).map((header) => {
      return (
        <div key={genRand(4)}>
          <a href={header[1].metadata.url}>
            <button className="skillButton">
              <p className="header">{header[0]}</p>
            </button>
          </a>
          <ul className="list subheader">
            {header[1].data.map((subsection) => {
              return (
                <a
                  key={genRand(3)}
                  href={`${header[1].metadata.url}#${catString(
                    subsection.name,
                    "-"
                  )}`}
                >
                  <button className="skillButton">
                    <li>{subsection.name}</li>
                  </button>
                </a>
              );
            })}
          </ul>
        </div>
      );
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
        <div className="center">
          <img
            src={sidebar.headshot}
            className="headshot"
            alt="headshot"
            title="hi!"
          />
          <p className="name">Alex Baird</p>
          <p className="subheader">full stack junior web developer</p>
          <div className="externalLinks">{linkMapper(sidebar.links)}</div>
        </div>
        <hr />
        {sectionMapper()}
        <a href="/playground">
          <button className="skillButton">
            <p className="header">playground</p>
          </button>
        </a>
        <hr />
        <p className="header"> External Links</p>
        {linkMapper(sidebar.externalLinks)}
      </div>
    </>
  ) : (
    <>
      <img
        src={Arrow}
        style={{ transform: "scale(-1, -1)" }}
        className="sidebarToggler"
        alt="sidebar opener"
        title="open sidebar"
        onClick={() => toggleSidebarVisibility(true)}
      />
    </>
  );
}
