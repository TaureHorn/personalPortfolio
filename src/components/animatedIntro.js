import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedIntro(props) {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Hi, I'm Alex ^1000", "I'm a junior full stack web developer"],
      smartBackspace: true,
      showCursor: false,
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="typedText">
      <p className="centerForced typedText" ref={element} />
    </div>
  );
}
