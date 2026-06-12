import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Bhati",
  initials: "AB",
  url: "https://aryanbhati.vercel.app",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer crafting fast, polished experiences. Founding Engineer at Wagr Games, building real-time gaming products across web, iOS, and Android.",
  summary:
    "I'm a full stack developer who loves taking products from idea to production: scalable backends, snappy frontends, and the design details in between. Since **January 2025** I've been a **Founding Engineer at Wagr Games**, building gaming experiences for web, iOS, and Android. Before that I interned at **Kidjig**, shipping AI applications and tools end to end. Outside of work you'll find me building side projects and exploring new tools.",
  avatarUrl: "/avatar.png",
  skills: [
    { name: "TypeScript", iconUrl: "/tech/typescript.png" },
    { name: "JavaScript", iconUrl: "/tech/javascript.png" },
    { name: "React", iconUrl: "/tech/reactjs.png" },
    { name: "React Native", iconUrl: "/tech/reactjs.png" },
    { name: "Next.js", iconUrl: "/tech/nextjs.svg" },
    { name: "Astro", iconUrl: "/tech/astro.svg" },
    { name: "Node.js", iconUrl: "/tech/nodejs.png" },
    { name: "Rust", iconUrl: "/tech/rust.svg" },
    { name: "SwiftUI", iconUrl: "/tech/swiftui.svg" },
    { name: "AWS", iconUrl: "/tech/aws.svg" },
    { name: "Fastify", iconUrl: "/tech/fastify.svg" },
    { name: "FastAPI", iconUrl: "/tech/fastapi.svg" },
    { name: "Hono.js", iconUrl: "/tech/hono.svg" },
    { name: "NestJS", iconUrl: "/tech/nestjs.svg" },
    { name: "Java", iconUrl: "/tech/java.png" },
    { name: "MongoDB", iconUrl: "/tech/mongodb.png" },
    { name: "Express", iconUrl: "/tech/express.png" },
    { name: "Tailwind CSS", iconUrl: "/tech/tailwind.png" },
    { name: "TanStack Query", iconUrl: "/tech/tanstackquery.png" },
    { name: "Docker", iconUrl: "/tech/docker.png" },
    { name: "Git", iconUrl: "/tech/git.png" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://drive.google.com/file/d/1pcs9QK_PLYvv2zFZPqBfS8jjLq3fzo8k/view?usp=sharing",
      icon: FileTextIcon,
      label: "Resume",
    },
  ],
  contact: {
    email: "codiearyan07@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AryanBhati7",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/codiearyan",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:codiearyan07@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Wagr Games",
      href: "https://wagr.co",
      badges: [],
      location: "New York, USA (Remote)",
      title: "Founding Engineer",
      logoUrl: "/wagr.png",
      start: "Jan 2025",
      end: undefined,
      description: [
        "Joined as a founding engineer and helped scale Wagr from day 0 to an $8M-valuation startup.",
        "Optimized web performance to make Wagr one of the best gaming experiences on the web in the industry.",
        "Integrated games into the web, Android, and iOS apps.",
        "Working extensively across the stack with AWS, Rust, Next.js, and SwiftUI.",
      ],
    },
    {
      company: "Kidjig",
      href: "https://kidjig.com",
      badges: [],
      location: "Bareilly, India (Remote)",
      title: "Software Engineer Intern",
      logoUrl: "/kidjig.svg",
      start: "Aug 2024",
      end: "Jan 2025",
      description: [
        "Shipped AI applications and tools end to end with React, Node.js, and Express.",
        "Implemented responsive, cross-browser UIs, collaborating with designers and product managers on high-quality features.",
        "Handled deployments and hosting on AWS and Firebase, and participated in code reviews.",
      ],
    },
  ],
  projects: [
    {
      title: "Sociact AI",
      href: "https://www.sociact.ai/dashboard",
      dates: "2025",
      active: true,
      description:
        "A generative AI platform for creators. Generate images, videos, and thumbnails, run social automations, and analyze SEO, all from one dashboard.",
      technologies: ["Next.js", "TypeScript", "Generative AI", "Automations"],
      links: [
        {
          type: "Website",
          href: "https://www.sociact.ai/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/proj-sociact.png",
      video: "",
    },
    {
      title: "ChatSuite",
      href: "https://chat.aryancrafts.tech/",
      dates: "2025",
      active: true,
      description:
        "An intelligent AI companion supporting multiple frontier models, with visual intelligence over images, PDFs and docs, real-time web search, and an AI-powered document canvas.",
      technologies: ["Next.js", "TypeScript", "AI SDK", "LangChain", "AWS S3"],
      links: [
        {
          type: "Website",
          href: "https://chat.aryancrafts.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/codiearyan/chat-suite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/proj-chatsuite.png",
      video: "",
    },
    {
      title: "Educasm",
      href: "https://educasm.aryancrafts.tech/",
      dates: "2025",
      active: true,
      description:
        "A Perplexity-style educational AI platform with instant doubt solving, quizzes, a playground, and interactive AI teacher sessions that adapt to your age.",
      technologies: ["React", "TypeScript", "Generative AI"],
      links: [
        {
          type: "Website",
          href: "https://educasm.aryancrafts.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/codiearyan/educasm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/proj-educasm.png",
      video: "",
    },
    {
      title: "Rainbow English School",
      href: "https://www.rainbowengschool.com",
      dates: "2025",
      active: true,
      description:
        "Full ERP software and website for a school, plus a students app on Google Play. Admissions, attendance, fees, and notices in a Turborepo monorepo.",
      technologies: ["React", "React Native (Expo)", "Fastify", "tRPC", "Astro"],
      links: [
        {
          type: "Website",
          href: "https://www.rainbowengschool.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.rainbow.mobile&hl=en_IN",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/proj-rainbow.png",
      video: "",
    },
    {
      title: "Shadow Play",
      href: "https://shadowplay.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A video streaming platform to watch and share videos effortlessly, with channels, playlists, likes, and a creator dashboard bringing a variety of content to your fingertips.",
      technologies: ["React", "MongoDB", "Express", "TanStack Query", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://shadowplay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AryanBhati7/Shadow-Play",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shadowplay.png",
      video: "",
    },
    {
      title: "BlogApp",
      href: "https://blogapp07.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A publishing platform to write blogs on any topic and start your journey as a content creator, with rich text editing, image uploads, and a clean reading experience.",
      technologies: ["React", "Appwrite", "Redux", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://blogapp07.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AryanBhati7/BlogApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blogapp.png",
      video: "",
    },
  ],
  openSource: [
    {
      repo: "twentyhq/twenty",
      href: "https://github.com/twentyhq/twenty",
      logoUrl: "https://github.com/twentyhq.png?size=96",
      description:
        "The #1 open-source CRM, a modern community-built alternative to Salesforce.",
      language: "TypeScript",
    },
    {
      repo: "kiwix/kiwix-apple",
      href: "https://github.com/kiwix/kiwix-apple",
      logoUrl: "https://github.com/kiwix.png?size=96",
      description:
        "Kiwix for iOS and macOS, the offline reader that puts Wikipedia and more in your pocket. No internet needed.",
      language: "Swift",
    },
    {
      repo: "kiwix/kiwix-android",
      href: "https://github.com/kiwix/kiwix-android",
      logoUrl: "https://github.com/kiwix.png?size=96",
      description:
        "Kiwix for Android, bringing offline access to free knowledge to millions of users worldwide.",
      language: "Kotlin",
    },
  ],
} as const;
