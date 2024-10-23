import { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPbasic = () => {
  const box = useRef(null);

  useEffect(() => {
    gsap.to(box.current, { x: 300, rotate: 360, ease: "bounce", duration: 2 });
  }, []);

  return (
    <>
      <div
        ref={box}
        className="w-24 h-24 border border-black flex items-center justify-center"
      >
        Basic
      </div>
    </>
  );
};

export default GSAPbasic;
