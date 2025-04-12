import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "office-dragons-webapp",
    title: "Office & Dragons",
    description:
      "A powerful web application built using Next.js, ShadCN, Tailwind CSS, and Laravel, designed for document management and workflow automation.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://app.officeanddragons.com/login",
    tags: ["Next.js", "ShadCN", "Tailwind CSS", "Laravel", "Web App"],
  }
  ,

  {
    id: "mystique-ai-webapp",
    title: "Mystique AI",
    description:
      "An advanced AI-powered web application leveraging Next.js, Styled Components, CSS. It integrates Streaming API, GCP & AWS cloud storage, and OAuth authentication for a seamless AI-driven experience.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://mystique.team/",
    tags: [
      "Next.js",
      "Styled Components",
      "CSS",
      "Django",
      "Streaming API",
      "GCP",
      "AWS",
      "OAuth",
      "AI",
      "Web App"
    ],
  }

  ,

  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and Postgres, Supabase Prisma to integrate backend and frontend with ease.",
    icon: "/skills/express.svg",
    repoType: RepoType.Public,
    url: "https://reactnativebe-ympr.onrender.com",
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/dhaval110/social-media-backend",
    tags: ["Node.js", "Express.js", "Postgres", "WebSocket"],
  },

  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/dhaval110/dhaval",
    url: "https://dhaval1.vercel.app/",
    tags: ["Next.js", "Sass", "Web Development"],
  },

  {
    id: "klimate-weather-app",
    title: "Klimate - Weather App",
    description:
      "A modern weather app built with Next.js, Tailwind CSS, Shadcn UI, TanStack Query, and TypeScript. It fetches real-time weather data and displays it with a clean, responsive UI.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/dhaval110/klimate",
    url: "https://klimate-ebon.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Shadcn UI", "TanStack Query", "Weather API"],
  }



];
export default projects;
