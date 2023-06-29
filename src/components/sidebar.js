import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CV from "../data/CV.pdf";
import Document from "../resources/icons/document.svg";
import Github from "../resources/icons/github.svg";
import Headshot from "../data/headshot.jpg";
import LinkedIn from "../resources/icons/linkedIn.svg";
import SidebarOpener from "../resources/icons/sidebarOpener.svg";
import SidebarCloser from "../resources/icons/sidebarCloser.svg";

export default function Sidebar() {
  const navigate = useNavigate();
  const [sidebarVisibility, toggleSidebarVisibility] = useState(true);

  return sidebarVisibility ? (
    <>
      <img
        src={SidebarCloser}
        className="sidebarToggler"
        alt="sidebar close button"
        title="close sidebar"
        onClick={() => toggleSidebarVisibility(false)}
      />
      <div className="padding sidebar">
        <div className="center">
          <img src={Headshot} className="headshot" alt="headshot" title="hi!" />
          <p className="name">Alex Baird</p>
          <p className="subheader">full stack web developer</p>
          <div className="externalLinks">
            <div className="linkContainer">
              <img src={Github} className="icon" alt="github" title="github" />
              <a
                className="link subheader"
                href="https://github.com/TaureHorn"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
            <div className="linkContainer">
              <img src={Document} className="icon" alt="CV" title="CV" />
              <a
                className="link subheader"
                href={CV}
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </div>
            <div className="linkContainer">
              <img
                src={LinkedIn}
                className="icon"
                alt="LinkedIn"
                title="LinkedIn"
              />
              <a
                className="link subheader"
                href="https://www.linkedin.com/in/alex-b-39193683/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div id="internalLinks">
          <p className="header link" onClick={() => navigate("/")}>
            Home
          </p>
          <p className="header link" onClick={() => navigate("/projects")}>
            Projects
          </p>
          <ul className="list subheader">
            <li className="link">hacking text adventure game</li>
            <li className="link">browser startpage</li>
            <li className="link">neovim config</li>
          </ul>
          <p className="header link" onClick={() => navigate("/bootcamp")}>
            Web Dev Bootcamp
          </p>
          <ul className="list subheader">
            <li className="link">Social Music Site</li>
            <li className="link">Events Tracker</li>
            <li className="link">Fantasy Bestiary Quiz</li>
          </ul>
          <p className="header link" onClick={() => navigate("/hobbies")}>
            Hobbies
          </p>
          <ul className="list subheader">
            <li className="link">Dungeons and Dragons</li>
            <li className="link">Learning Linux</li>
          </ul>
        </div>
        <hr />
        <div id="externalLinks">
          <p className="header"> External Links</p>
          <a
            className="link subheader"
            href="https://thedeveloperacademy.com/courses/funded-software-bootcamp/"
            target="_blank"
            rel="noreferrer"
          >
            The Developer Academy Bootcamp
          </a>
          <br />
          <a
            className="link subheader"
            href="https://github.com/TDAWebDevBootcamp"
            target="_blank"
            rel="noreferrer"
          >
            The Developer Academy Github
          </a>
        </div>
      </div>
    </>
  ) : (
    <>
      <img
        src={SidebarOpener}
        className="sidebarToggler"
        alt="sidebar open button"
        title="open sidebar"
        onClick={() => toggleSidebarVisibility(true)}
      />
    </>
  );
}
