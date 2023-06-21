import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";

export function ColorRise() {
  const colorRef = useRef(null);

  useEffect(() => {
    // AOS.init({
    //   duration: 1500,
    // });

    const revealContent = () => {
      colorRef.current.style.transform = "translateY(-100%) scaleY(0)";
    };

    const delay = setTimeout(revealContent, 500);

    return () => {
        clearTimeout(delay);
      };
    }, []);

    // return () => {
    //   AOS.refresh();
    // }, []);

  return (
      <div
        className="absolute inset-0 bg-orange-50 z-50"
        style={{ transform: "translateY(0) scaleY(1)", opacity:1}}
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-duration="750"
        ref={colorRef}
      ></div>
  );
}

