"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

import Button from "@/components/Button";

import { ANIMATION_SCALE } from "@/constants/animate";

import CardProject from "./CardProject";

const PROJECT_LIST = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

function Projects() {
  const [modal, setModal] = useState({ active: false, indexProject: 0 });
  const { active, indexProject } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  useEffect(() => {
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    // Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = useCallback((e) => {
    xMoveContainer.current(e.clientX);
    yMoveContainer.current(e.clientY);
    xMoveCursor.current(e.clientX);
    yMoveCursor.current(e.clientY);
    xMoveCursorLabel.current(e.clientX);
    yMoveCursorLabel.current(e.clientY);
  }, []);

  const manageModal = useCallback((isOpen, index, x, y) => {
    moveItems({ clientX: x, clientY: y });
    setModal({ active: isOpen, indexProject: index });
  }, []);

  return (
    <>
      <div
        onMouseMove={moveItems}
        className="flex flex-col items-center px-[200px] mt-[300px]"
      >
        <div className="flex flex-col items-center justify-center max-w-[1400px] w-full mb-[100px]">
          {PROJECT_LIST.map((item, index) => (
            <CardProject
              key={item.title}
              title={item.title}
              index={index}
              isOpen={active}
              manageModal={manageModal}
            />
          ))}
        </div>

        <Button>
          <span>See More</span>
        </Button>
      </div>

      <div>
        <motion.div
          ref={modalContainer}
          variants={ANIMATION_SCALE}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="h-[350px] w-[400px] fixed top-1/2 left-1/2 bg-background-1 pointer-events-none overflow-hidden z-[3]"
        >
          <div
            style={{ top: `${indexProject * -100}%` }}
            className="h-full w-full relative transition-[top] duration-500 ease-in"
          >
            {PROJECT_LIST.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className="h-full w-full flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    className="h-auto"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="flex items-center justify-center text-[14px] pointer-events-none w-[80px] h-[80px] rounded-[50%] bg-primary-5 text-primary-1 fixed z-[3]"
          variants={ANIMATION_SCALE}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />
        <motion.div
          ref={cursorLabel}
          className="flex items-center justify-center text-[14px] pointer-events-none w-[80px] h-[80px] rounded-[50%] text-primary-1 fixed z-[3]"
          variants={ANIMATION_SCALE}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
