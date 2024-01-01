"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";

function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className=" text-primary-1 flex flex-col items-center justify-center bg-background-black-1 relative"
    >
      <div className="pt-[200px] w-full max-w-[1800px] bg-background-black-1">
        <div className="border-b border-solid border-background-black-2 pb-[100px] my-[200px] relative">
          <span className="flex items-center">
            <div className="w-[100px] h-[100px] relative rounded-[50%] overflow-hidden">
              <Image
                fill
                alt="image"
                src="/images/background.jpg"
                className="object-cover"
              />
            </div>
            <h2 className="mr-[0.3em] text-[5vw]">Let&apos;s work</h2>
          </span>
          <h2 className="text-[5vw] m-0">together</h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
          >
            <Button
              backgroundColor="#334BD3"
              className="w-[180px] h-[180px] bg-background-yellow text-primary-1 rounded-[50%] absolute flex items-center justify-center cursor-pointer"
            >
              <p className="m-0 text-[16px] z-[2] relative">Get in touch</p>
            </Button>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] left-full"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex gap-[20px] mt-[100px] my-[200px]">
          <Button>
            <p>info@dennissnellenberg.com</p>
          </Button>
          <Button>
            <p>+31 6 27 84 74 30</p>
          </Button>
        </div>
        <div className="flex justify-between mt-[200px] p-5">
          <div className="flex gap-[10px] items-end">
            <span>
              <h3>Version</h3>
              <p>2022 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
