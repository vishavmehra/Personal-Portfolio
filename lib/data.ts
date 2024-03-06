import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import travelme from "@/public/travelme.png";
import retrogroove from "@/public/retrogroove.png";
import listing from "@/public/listing.png";
import authors from "@/public/authors.png";
import portfolio from "@/public/portfolio.png";
import jotion from "@/public/jotion.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Retrogroove",
    description:
      "Developed a music platform allowing users to upload, like and listen to songs.",
    tags: ["Nextjs", "Typescript", "TailwindCSS", "Shadcn", "PostgreSQL"],
    imageUrl: retrogroove,
    github: "https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link",
    live: "https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link",
  },
  {
    title: "Listing",
    description:
      "Developed a hotel booking app where users can book selected hotels or list their property.",
    tags: ["Nextjs",  "reactjs", "typescript","TailwindCSS", "Prisma", "Postgresql", "Oauth"],
    imageUrl: listing,
    github: "https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link",
    live: "https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link",
  },
  {
    title: "Jotion",
    description:
      "Developed a note-taking web application with user authentication and image upload capabilities.",
    tags: ["nextjs","reactjs","convex", "tailwindcss", "edgestore", "clerkapi"],
    imageUrl: jotion,
    github: "https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link",
    live: "https://drive.google.com/file/d/1jpwZtUDsOiU25KpG_AhLp6eSla2ZAkaQ/view?usp=drive_link",
  },
  {
    title: "Portfolio",
    description:
      "Developed a personal portfolio website highlighting a range of projects and my proficiency in various technologies & tools.",
    tags: ["Nextjs", "reactjs", "threejs", "framer motion", "Resend","typescript", "tailwindcss"],
    imageUrl: portfolio,
    github: "https://github.com/vishavmehra/personal-portfolio",
    live: "https://personal-portfolio-theta-sepia.vercel.app/",
  },
  {
    title: "Authors",
    description:
      "Created a note-taking application that allows users to create, edit, and delete notes.",
      tags: ["Nextjs", "typescript", "tailwindcss"],
    imageUrl: authors,
    github: "https://github.com/vishavmehra/authors",
    live: "https://authors-eight.vercel.app/",
  },
  {
    title: "TravelMe",
    description:
      "Developed a captivating frontend website for travel enthusiasts who would love to connect.",
    tags: ["Typescript", "tailwindcss"],
    imageUrl: travelme,
    github: "https://github.com/vishavmehra/TravelMe",
    live: "https://travelme-sigma.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TailWindCSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "ThreeJs",
  "Framer Motion",
  "QT",
  "NodeJs",
  "ExpressJs",
  "JWT",
  "ClerkApi",
  "Fire Base",
  "Supa Base",
  "EdgeStore",
  "Resend",
  "PostgreSQL",
  "My SQL",
  "MongoDB",
  "Github",
  "Anaconda",
  "VsCode",
  "PyCharm",
  "C", "C++", "Python"
  
] as const;
