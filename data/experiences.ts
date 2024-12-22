import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Development Engineer",
    company: "Jovial Infotech",
    startDate: "Jul 2024",
    isCurrentJob: true,
    location: "Pune, India",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },

    {
    designation: "Full Stack Development Intern",
    company: "MCG",
    startDate: "Dec 2023",
    endDate: "Apr 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Revamped and enhanced 3+ mobile apps using Flutter.",
      "Deployed RESTful APIs for seamless app-server integration.",
      "Integrated Google AdMob to effectively monetize applications.",
      "Contributed to boosting app functionality and revenue generation.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Sparkle Infotech",
    startDate: "Nov 2021",
    endDate: "Dec 2023",
    isCurrentJob: false,
    location: "Pune, India",
    description: [
      "Developed over 5 web applications with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },

  {
    designation: "Web Development Intern",
    company: "Cyber Cloud Shield Private Limited",
    startDate: "Jul 2019",
    endDate: "Nov 2021",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
];

export default experiences;
