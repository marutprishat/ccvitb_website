"use client";

import AboutUs from "./AboutUs";
import Contact from "./Contact";
import TheTeam from "./TheTeam";
import Timeline from "./timeline";
import Hero from "./Hero";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])
  return (
    <main ref={ref} className="flex min-h-screen flex-col px-4">
      <motion.div
        variants={{
          hidden: { opacity: 0, y : 75, left : 0 },
          visible: { opacity: 1, y : 0, left : "100%" }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25 }}
      >
        <Hero />
        <AboutUs />
        <Timeline />
        <TheTeam />
        <Contact />
      </motion.div>
    </main>
  )
}
