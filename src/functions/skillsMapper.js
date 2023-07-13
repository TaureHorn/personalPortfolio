import Bash from "../resources/icons/bash.svg";
import Bootstrap from "../resources/icons/bootstrap.svg";
import CSS from "../resources/icons/css.svg";
import Docker from "../resources/icons/docker.svg";
import Express from "../resources/icons/express.svg";
import HTML from "../resources/icons/html.svg";
import Javascript from "../resources/icons/javascript.svg";
import JSON from "../resources/icons/json.svg";
import Lua from "../resources/icons/lua.svg";
import MongoDB from "../resources/icons/mongodb.svg";
import Neovim from "../resources/icons/nvim.svg";
import React from "../resources/icons/react.svg";
import Sass from "../resources/icons/sass.svg";
import Tailwind from "../resources/icons/tailwind.svg";

import { genRand } from "./random";

export function skillsMapper(data) {
  return data.map((skill) => {
    const details = detailsFinder(skill);
    return (
      <a href={details.href} target="_blank" rel="noreferrer">
        <img
          src={details.icon}
          className="skillIcon"
          alt={skill}
          title={skill}
          key={genRand(3)}
        />
      </a>
    );
  });
}

function detailsFinder(skill) {
  let icon = "";
  let href = "";
  switch (skill) {
    case "Bash":
      icon = Bash;
      href = "https://en.wikipedia.org/wiki/Bash_(Unix_shell)";
      break;
    case "Bootstrap":
      icon = Bootstrap;
      href = "https://getbootstrap.com/";
      break;
    case "CSS":
      icon = CSS;
      href = "https://en.wikipedia.org/wiki/CSS";
      break;
    case "Docker":
      icon = Docker;
      href = "https://www.docker.com/";
      break;
    case "Express":
      icon = Express;
      href = "https://expressjs.com/";
      break;
    case "HTML":
      icon = HTML;
      href =
        "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics";
      break;
    case "Javascript":
      icon = Javascript;
      href = "https://developer.mozilla.org/en-US/docs/Web/javascript";
      break;
    case "JSON":
      icon = JSON;
      href =
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON";
      break;
    case "Lua":
      icon = Lua;
      href = "https://www.lua.org/";
      break;
    case "MongoDB":
      icon = MongoDB;
      href = "https://www.mongodb.com/";
      break;
    case "Neovim":
      icon = Neovim;
      href = "https://neovim.io/";
      break;
    case "React":
      icon = React;
      href = "https://react.dev/";
      break;
    case "Sass":
      icon = Sass;
      href = "https://sass-lang.com/";
      break;
    case "TailwindCSS":
      icon = Tailwind;
      href = "https://tailwindcss.com/";
      break;
    default:
      console.log("incorrect assignment");
  }
  return { icon: icon, href: href }
}
