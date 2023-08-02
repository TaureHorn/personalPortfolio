import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedIntro(props) {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      showCursor: false,
      smartBackspace: true,
      strings: props.content.intro.typedText,
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
