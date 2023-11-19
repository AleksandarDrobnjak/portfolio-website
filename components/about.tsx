"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        After graduating with a degree in{" "}
        <span className="font-medium">Law</span>, I decided to pursue my passion
        for programming. I enrolled in a code by Comtrade and learned{" "}
        <span className="font-medium">Front-End Development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        aspect of problem-solving and learning new skills, as well as the
        feeling of finally grasping it and finding a solution to a problem,
        resulting in a successful finished product. My core stack is{" "}
        <span className="font-medium">
          JavaScript, React, Next.js and TypeScript
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I spend my free
        time on outings, hiking, and physical activities. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and astrophysics</span>. I am also
        learning new languages, such as the German language.
      </p>
    </motion.section>
  );
}
