"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ANIMATION_ACTIVE_LINK,
  ANIMATION_MENU_HEADER,
  ANIMATION_NAV_ITEM,
} from "@/constants/animate";

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

function NavHeader() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const ANIMATION_CURVE = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const onMouseLeave = useCallback(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);

  const onMouseEnter = useCallback(
    (href) => () => {
      setSelectedIndicator(href);
    },
    [],
  );

  return (
    <motion.div
      variants={ANIMATION_MENU_HEADER}
      animate="enter"
      initial="initial"
      exit="exit"
      className="fixed top-0 right-0 h-screen bg-background-black-2 p-[100px] z-10"
    >
      <div className="mt-20 min-w-[325px]">
        <div onMouseLeave={onMouseLeave} className="flex flex-col gap-4">
          <div className="border-b border-solid border-background-white-70 mb-10">
            <p className="text-[11px] text-background-white-70 my-3 uppercase">
              Navigation
            </p>
          </div>
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              variants={ANIMATION_NAV_ITEM}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={index}
              key={item.href}
              onMouseEnter={onMouseEnter(item.href)}
              className="flex flex-col relative"
            >
              <motion.div
                variants={ANIMATION_ACTIVE_LINK}
                animate={selectedIndicator === item.href ? "open" : "closed"}
                className="w-[10px] h-[10px] rounded-full bg-primary-1 absolute top-[calc(50%-5px)] -left-7 -translate-x-1/2"
              />
              <Link href={item.href} className="text-[56px] text-primary-1">
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <svg className="w-[100px] h-full absolute top-0 -left-[99px] fill-background-black-2 stroke-none">
        <motion.path
          variants={ANIMATION_CURVE}
          initial="initial"
          animate="enter"
          exit="exit"
        />
      </svg>
    </motion.div>
  );
}

export default NavHeader;
