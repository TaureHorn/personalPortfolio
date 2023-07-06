import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SidebarCloser from "../resources/icons/sidebarCloser.svg";
import SidebarOpener from "../resources/icons/sidebarOpener.svg";

import { genRand } from "../functions/random";

export default function Sidebar(props) {
  const navigate = useNavigate();
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
            className="link subheader"
            href={link.url}
            rel="noreferrer"
            target="_blank"
          >
            {link.text}
          </a>
        </div>
      );
    });
  }
  function sectionMapper() {
    return Object.entries(props.content.main).map((header) => {
      return (
        <div key={genRand(4)}>
          <p className="header link">{header[0]}</p>
          <ul className="list subheader">
            {header[1].data.map((subsection) => {
              return (
                <div key={genRand(3)}>
                  <li className="link">{subsection.name}</li>
                </div>
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
        src={SidebarCloser}
        className="sidebarToggler"
        alt="sidebar closer"
        title="close sidebar"
        onClick={() => toggleSidebarVisibility(false)}
      />
      <div className="padding sidebar">
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
        <hr />
        <p className="header"> External Links</p>
        {linkMapper(sidebar.externalLinks)}
      </div>
    </>
  ) : (
    <>
      <img
        src={SidebarOpener}
        className="sidebarToggler"
        alt="sidebar opener"
        title="open sidebar"
        onClick={() => toggleSidebarVisibility(true)}
      />
    </>
  );
}
