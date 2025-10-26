import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CursorTrail.css";

const CursorTrail = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Create 36 span elements
    for (let i = 0; i < 36; i++) {
      const span = document.createElement("span");
      span.classList.add("box");
      span.style.setProperty("--i", i + 1);
      span.style.filter = `hue-rotate(${i * 10}deg)`;
      cursor.appendChild(span);
    }

    // Mousemove animation
    const handleMouseMove = (e) => {
      gsap.to(".box", {
        x: e.clientX,
        y: e.clientY,
        rotate: (index) => index * 10,
        stagger: 0.05,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cursor.innerHTML = ""; 
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default CursorTrail;
