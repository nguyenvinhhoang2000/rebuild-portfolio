"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Button from "@/components/Button";

import { ANIMATION_ABOUT_ME_SLIDE_UP } from "@/constants/animate";

const phrase =
  "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

function AboutMe() {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="flex justify-center mt-[200px] px-[200px]"
    >
      <div className="flex justify-between max-w-[1400px] gap-[100px] relative">
        <p className="m-0 text-[36px] gap-2 max-w-[600px]">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="mr-[3px] inline-flex overflow-hidden relative"
              >
                <motion.span
                  variants={ANIMATION_ABOUT_ME_SLIDE_UP}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div data-scroll data-scroll-speed={0.1}>
          <Button className="">
            <p>About me</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
