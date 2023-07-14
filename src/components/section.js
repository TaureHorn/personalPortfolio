import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import { genRand } from "../functions/random";

import Post from "./post";
import SkillsBar from "./skillsBar";

export default function Section(props) {
  const modalID = genRand(6);
  const [modalImage, setModalImage] = useState();

  function closeModal(event) {
    if (event.target === dialog) {
      dialog.close();
    }
  }

  let dialog = "";
  useEffect(() => {
    if (document.querySelector("dialog")) {
      dialog = document.querySelector("dialog");
      dialog.addEventListener("click", closeModal);
    }
  }, []);

  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      showCursor: false,
      strings: [props.content.metadata.explainer],
      typeSpeed: 10,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  function postMapper() {
    return props.content.data.map((post, index) => {
      return (
        <Post
          key={genRand(4)}
          data={post}
          index={index}
          modalID={modalID}
          setModalImage={(modalImage) => setModalImage(modalImage)}
        />
      );
    });
  }
  const posts = postMapper();
  return (
    <>
      <form method="dialog" className="dialogForm">
        <dialog closed="true" id={modalID} className="centerForced dialog">
          <img src={modalImage} className="dialogImg" draggable="false" />
        </dialog>
      </form>
      <div className="explainer">
        <span className="sectionText typedText" ref={element} />
      </div>
      {posts}
      <SkillsBar />
    </>
  );
}
