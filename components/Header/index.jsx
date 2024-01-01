"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBoolean } from "usehooks-ts";

import NavHeader from "@/components/Header/Nav";
import Magnetic from "@/components/Magnetic";

import styles from "./Header.module.scss";

function Header() {
  const { value: isOpen, setFalse: setIsActive, toggle } = useBoolean(false);
  const pathname = usePathname();
  const burgerButton = useRef(null);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burgerButton.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 200,
        onLeave: () => {
          gsap.to(burgerButton.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            burgerButton.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false),
          );
        },
      },
    });
  }, []);
  return (
    <>
      <header className="flex justify-between w-full px-6 py-4 absolute z-10 text-primary-1">
        <span>
          <Magnetic>
            <Link
              className="w-20 h-20 rounded-full flex justify-center items-center"
              href="/"
            >
              Hoangng
            </Link>
          </Magnetic>
        </span>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Magnetic>
                <Link
                  className="w-20 h-20 rounded-full flex justify-center items-center"
                  href="/"
                >
                  Home
                </Link>
              </Magnetic>
            </li>
            <li>
              <Magnetic>
                <Link
                  className="w-20 h-20 rounded-full flex justify-center items-center"
                  href="/"
                >
                  About
                </Link>
              </Magnetic>
            </li>
            <li>
              <Magnetic>
                <Link
                  className="w-20 h-20 rounded-full flex justify-center items-center"
                  href="/"
                >
                  Contact
                </Link>
              </Magnetic>
            </li>
          </ul>
        </nav>
      </header>

      {/* Button Header Sticky */}
      <div ref={burgerButton} className="fixed top-6 right-6 scale-0 z-20">
        <Magnetic>
          <button
            type="button"
            onClick={toggle}
            className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-background-black-1 outline-none"
          >
            <span
              className={`${styles.Burger} ${isOpen ? styles.Active : ""}`}
            />
          </button>
        </Magnetic>
      </div>

      {/* Header Sticky */}
      <AnimatePresence mode="wait">{isOpen && <NavHeader />}</AnimatePresence>
    </>
  );
}

export default Header;
