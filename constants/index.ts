import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/harsh-gupta-652369343",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Harsh2126",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/harshgupta202/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI PDF Chatbot — RAG Pipeline",
    description:
      "Built a Retrieval-Augmented Generation (RAG) based PDF chatbot that retrieves relevant document content and generates context-aware answers using an LLM. Implemented PDF text extraction, recursive chunking, and semantic embeddings using LangChain and Hugging Face Sentence Transformers, stored in ChromaDB. Developed a FastAPI REST API integrating Groq LLM for grounded, low-hallucination answers.",
    image: "/projects/project-1.png",
    link: "https://github.com/Harsh2126",
  },
  {
    title: "AI Code Reviewer — GitHub App",
    description:
      "Built a GitHub App that automatically reviews every Pull Request using Groq's LLaMA-3.3-70B model and posts structured markdown feedback covering bugs, security issues, and performance tips. Implemented GitHub JWT authentication and webhook signature verification via Octokit. Built a modular Express.js backend and a React.js analytics dashboard to track review history in real time.",
    image: "/projects/project-2.png",
    link: "https://github.com/Harsh2126",
  },
  {
    title: "Bus Booking System",
    description:
      "Developed a full-stack bus ticket booking web application enabling users to search routes, view seat availability, and book tickets online. Designed MongoDB schemas for buses, routes, seats, and bookings with real-time double-booking prevention. Implemented user authentication, an admin panel, and a responsive seat-selection and booking-confirmation flow.",
    image: "/projects/project-3.png",
    link: "https://github.com/Harsh2126",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Harsh2126",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/harsh-gupta-652369343",
      },
      {
        name: "LeetCode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/harshgupta202/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "harshgupta2026@gmail.com",
        icon: null,
        link: "mailto:harshgupta2026@gmail.com",
      },
      {
        name: "+91 9506600706",
        icon: null,
        link: "tel:+919506600706",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Harsh2126",
};
