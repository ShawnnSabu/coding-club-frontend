import React, { useEffect, useRef, useState } from "react";
import "./loader.css";
import gsap from "gsap";

function Loader() {
  //   const [animateOut, setAnimateOut] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  function typewriterEffect() {
    let text = "Welcome to";
    let i = 0;
    console.log(text.length);
    type();
    function type() {
      if (i < text.length) {
        document.getElementById("typewriter").textContent = text.substring(
          0,
          i + 1
        );
        i++;
        setTimeout(type, 150); // Recursively call the function with delay
      }
    }
  }
  useEffect(() => {
    typewriterEffect();
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
    // setTimeout(() => {
    //   setAnimateOut(true);
    // }, 5000);
  }, []);

  return (
    <div className="fixed flex items-center justify-center h-screen w-screen bg-black z-[10000]">
      {/* <div
          className={`flex flex-col items-center justify-center  ${
            animateOut ? "fade-out-move-down" : ""
          }`}
        > */}
      <div className="flex flex-col items-center justify-center">
        <span
          id="typewriter"
          className="text-[36px] sm:text-[60px] font-source text-white"
        ></span>
        {!isTyping && (
          <img
            src="/logo.png"
            alt="logo"
            className="w-[280px] sm:w-[430px]"
            data-aos="fade-in"
            data-aos-duration="2000"
          />
        )}
      </div>
    </div>
  );
}

export default Loader;
