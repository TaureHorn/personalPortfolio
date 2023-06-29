import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";


export default function AnimatedIntro(props) {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      showCursor: false,
      smartBackspace: true,
      strings: [
        "Hi, I'm Alex, <br /><br /> I'm a junior full stack web developer",
      ],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="typedText" className="centreText">
        <p className="typedText" ref={element} />
      </div>
    </>
  );
}
