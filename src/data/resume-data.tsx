import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ConsultlyLogo, JarockiMeLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Shahreaz Bin Alam",
  initials: "SBA",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "Full Stack Engineer specializing in building high-quality, scalable products from concept to launch. Experienced in leading teams, optimizing performance, and designing complex systems using modern web technologies.",
  avatarUrl:
    "https://res.cloudinary.com/dlfozpwa2/image/upload/v1724608860/cv/shahreaz.png",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ashahreaz@gmail.com",
    tel: "01844668099",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shahreaz0",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shahreazneeloy/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/shahreaz0",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Asia Pacific",
      degree: "Bachelor of Science in Computer Science and Engineering",
      start: "2016",
      end: "2021",
    },
    // {
    //   school: "St. Joseph Higher Secondary School",
    //   degree: "Higher Secondary School Certificate",
    //   start: "2011",
    //   end: "2013",
    // },
    // {
    //   school: "Dhanmondi Govt. Boy's High School",
    //   degree: " Secondary School Certificate",
    //   start: "2009",
    //   end: "2011",
    // },
  ],
  work: [
    {
      company: "EvidentBD",
      link: "https://www.evidentbd.com/",
      badges: [],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "June 2023",
      end: "Present",
      description:
        "Led front-end + back-end development for production products (MYE, AK, IK), defining component architecture and migrating projects to Next.js. Improved performance by 60% LCP reduction. Built a full-stack shipping label system integrating Amazon, DHL, FedEx, and more. Optimized backend workflows, reducing complexity by 45% and improving bulk performance by 10-15x. Implemented scheduler systems and Webhook-as-a-Service platforms.",
    },
    {
      company: "EvidentBD",
      link: "https://www.evidentbd.com/",
      badges: [],
      title: "Junior Software Engineer",
      logo: ConsultlyLogo,
      start: "October 2021",
      end: "June 2023",
      description:
        "Migrated legacy Laravel applications to React SPA architecture. Developed front-end for HRMS and IMS products, along with backend microservices for worklogs and authentication. Built a Postage Storage Service with fast search and reporting.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Go",
    "SQL",
    "React",
    "Next.js",
    "Tailwind",
    "shadcn/ui",
    "Jotai",
    "React Query",
    "React Hook Form",
    "Node.js",
    "Express",
    "Fastify",
    "NestJS",
    "Bun",
    "Hono",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Drizzle",
    "RabbitMQ",
    "BullMQ",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "CI/CD",
    "MCP servers",
    "OpenAI SDK",
    "LangChain",
    "Microservices",
  ],
  projects: [
    {
      title: "Manage Your Ecommerce (MYE)",
      techStack: [
        "Next.js",
        "shadcn/ui",
        "Jotai",
        "Tailwind",
        "Tanstack Query",
        "RHF",
      ],
      description:
        "Multi-vendor SaaS platform for order automation, shipping labels, and business reporting.",
      logo: ParabolLogo,
      link: {
        label: "mye",
        href: "https://www.manageyourecommerce.com",
      },
    },
    {
      title: "MYE Postage Service",
      techStack: [
        "Bun",
        "Hono",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "BullMQ",
        "Docker",
      ],
      description:
        "Full-stack shipping platform allowing users to connect carriers, purchase labels, and track shipments.",
      logo: ParabolLogo,
    },
    {
      title: "MYE Scheduler & Auth Service",
      techStack: [
        "Node.js",
        "TypeScript",
        "Zod",
        "Prisma",
        "Redis",
        "better-auth",
      ],
      description:
        "User-configurable scheduling system and multi-tenant authentication system with modern login flows.",
      logo: ParabolLogo,
    },
    {
      title: "Other Projects",
      techStack: [
        "GitHub",
        "AttendanceKeeper",
        "InventoryKeeper",
        "XWebhook",
        "Shopix",
        "Billsheba",
      ],
      description:
        "A collection of various open-source and professional projects.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shahreaz0",
      },
    },
  ],
} as const;
