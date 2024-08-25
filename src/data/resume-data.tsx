import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shahreaz Bin Alam",
  initials: "BJ",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
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
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2016",
      end: "2021",
    },
    {
      school: "St. Joseph Higher Secondary School",
      degree: "Higher Secondary School Certificate",
      start: "2011",
      end: "2013",
    },
    {
      school: "Dhanmondi Govt. Boy's High School",
      degree: " Secondary School Certificate",
      start: "2009",
      end: "2011",
    },
  ],
  work: [
    {
      company: "EvidentBD",
      link: "https://www.evidentbd.com/",
      badges: ["On-Site"],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Web Developer at EvidentBD, leading the front-end team and developing back-end services. I ensure seamless full-stack integration, collaborating with cross-functional teams to deliver high-quality, user-centric web applications",
    },
    {
      company: "EvidentBD",
      link: "https://www.evidentbd.com/",
      badges: ["On-Site"],
      title: "Jr. Software Engineer",
      logo: ConsultlyLogo,
      start: "2021",
      end: "2022",
      description:
        "Junior Web Developer at EvidentBD, contributed to designing, developing, and maintaining web applications, with a focus on front-end features and back-end optimization. Gained experience with modern web technologies and best coding practices.",
    },
    {
      company: "Computer Services Ltd.",
      link: "https://www.evidentbd.com/",
      badges: ["On-Site"],
      title: "intern",
      logo: ConsultlyLogo,
      start: "2019",
      end: "2019",
      description:
        "Managed office files, updated contact lists, developed basic websites, prepared client presentations, and monitored marketing campaigns.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "Mongoose",
    "Postgres",
    "Prisma/Drizzle",
  ],
  projects: [
    {
      title: "MYE",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "Next.js",
        "shadcn/ui",
        "jotai",
      ],
      description:
        "MYE is a platform for managing orders, stock, and payments across eBay, Amazon, WooCommerce, and Otto.",
      logo: ParabolLogo,
      link: {
        label: "mye",
        href: "https://www.manageyourecommerce.com",
      },
    },
    {
      title: "Ak",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "Next.js",
        "shadcn/ui",
        "jotai",
        "nuqs",
      ],
      description:
        "AK is an HR web app for streamlined employee attendance management.",
      logo: EvercastLogo,
      link: {
        label: "ak",
        href: "https://www.attendancekeeper.net/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
