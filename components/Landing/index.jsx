import React, { useCallback, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { ANIMATION_SLIDE_UP } from "@/constants/animate";

function Landing() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animate = useCallback(() => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  }, []);

  const update = useCallback((e) => {
    direction = e.direction * -1;
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: update,
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <motion.div
      variants={ANIMATION_SLIDE_UP}
      initial="initial"
      animate="enter"
      className="h-screen w-screen relative flex overflow-hidden"
    >
      <Image
        src="/images/background.jpg"
        fill
        alt="background"
        className="object-cover"
      />
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="flex relative whitespace-nowrap">
          <p
            ref={firstText}
            className=" relative m-0 text-primary-1 text-[230px] font-[500] pr-[50px]"
          >
            Freelance Developer -
          </p>
          <p
            ref={secondText}
            className=" relative m-0 text-primary-1 text-[230px] font-[500] pr-[50px]"
          >
            Freelance Developer -
          </p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="absolute top-[35%] left-[15%] text-[24px] text-primary-1"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-[80px]"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </motion.div>
  );
}

export default Landing;
