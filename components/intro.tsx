"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
          </motion.div>

          <motion.span
            className="jelly bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
           <span className="jelly"> 👋 </span>
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 jelly text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      Hello</span> 
      , My  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      Name</span> is <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      Vishav.</span>
       </span> I'm a{" "}
        <span className="font-bold ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      Full-Stack developer</span>{" "}with{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      experience</span> {" "}in{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      Machine Learning</span> {" "}and{" "} 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
      Deep Learning</span>{" "}Techniques.
           </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group jelly bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Contact me here{" "}</span>
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white jelly px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link"
          My resume
          target="_blank"  // Add this line
          rel="noopener noreferrer"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Download{" "}</span>
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white jelly p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/vishav-mehra-755107208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white jelly p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/vishavmehra"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
