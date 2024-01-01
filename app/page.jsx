"use client";

import React, { useEffect, useState } from "react";

import AboutMe from "@/components/AboutMe";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import SlideImage from "@/components/SlideImage";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="flex min-h-[2000px] flex-col">
      <Landing />
      <AboutMe />
      <Projects />
      <SlideImage />
    </main>
  );
}
