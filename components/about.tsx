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
      Hello, I'm Modak Verma, {" "}
      an aspiring Computer Science Engineering student with a passion for programming and problem-solving.{" "}
        <span className="font-medium"> <br/> I specialize in the MERN stack, where I find joy in crafting web applications that are not only functional but also user-friendly and aesthetically pleasing</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Thank you for visiting my portfolio</span>, where I showcase my projects, achievements, and the journey of a dedicated learner and programmer. Feel free to explore and connect with me{" "}
        <span className="font-medium">—I'm always excited to collaborate, learn, and grow together.
        </span>
      </p>
    </motion.section>
  );
}
