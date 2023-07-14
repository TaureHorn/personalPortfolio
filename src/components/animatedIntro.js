import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedIntro() {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      showCursor: false,
      smartBackspace: true,
      strings: [
        "Hi, I'm Alex, <br /><br /> I'm a junior full stack web developer.",
      ],
      typeSpeed: 20,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="typedText" className="centerText">
        <p className="centerForced introText typedText" ref={element} />
      </div>
    </>
  );
}
