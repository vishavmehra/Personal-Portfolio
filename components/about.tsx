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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto px-4" // Added mx-auto for centering and px-4 for padding
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">About Me</span></SectionHeading>
      <p className="mb-3 jelly">
        I am a <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">full stack developer</span> with experience in <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Machine Learning Projects </span>. My main tech stack is <span className="bg-clip-text jello text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">NextJs, ReactJs , NodeJs </span> and <span className="bg-clip-text jelly text-transparent bg-gradient-to-r from-purple-500 to-cyan-500" >Mongodb </span>but I tend to change it according to my needs. I am always <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">learning new technologies</span> and looking for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">software developer role </span> or contributing to an <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">open source project.</span>
      </p>
    </motion.section>
  );
}
