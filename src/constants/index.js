import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kidjig,
  chitchat,
  blogapp,
  shadowplay,
  threejs,
  hostedlink,
  tanstackquery,
  java,
  express,
  firebase,
  appwrite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "appwrite",
    icon: appwrite,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "tanstackquery",
    icon: tanstackquery,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Kidjig",
    icon: kidjig,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Working with AWS and firebase for deployment and hosting.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shadow Play",
    description:
      "A Video Streaming Web App which allows users to Watch and share videos effortlessly, It brings a variety of content to your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shadowplay,
    hosted_link: "https://shadowplay.vercel.app/",

    source_code_link: "https://github.com/AryanBhati7/Shadow-Play",
  },
  {
    name: "Blog App",
    description:
      "Write blogs on various topics and start your journey as an impactful Content Creator, exploring your passions, sharing your knowledge and experiences with the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    hosted_link: "https://blogapp07.vercel.app/",
    source_code_link: "https://github.com/AryanBhati7/BlogApp",
  },
  {
    name: "ChitChat",
    description:
      "A ChatApp which includes social login, user search and addition, text messaging with emojis, user blocking and unblocking, and real-time messaging with image support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chitchat,
    hosted_link: "https://react-chitchat.vercel.app/",
    source_code_link: "https://github.com/AryanBhati7/ChitChat-ReactChatApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
