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
    priority,
    eClerx,
    carrent,
    jobit,
    wonderMap,
    threejs,
    carPathFinding,
    MultiApiTranslation,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "CMS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Automation Tester",
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Javascript developer",
      company_name: "Priority",
      icon: priority,
      iconBg: "#383E56",
      date: "June 2023 - Aug 2024",
      points: [
        "Worked on debugging and fixing production issue for priority payments products.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Perform enhancement in QA automation frameworks",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "eClerx",
      icon: eClerx,
      iconBg: "#E6DEDD",
      date: "July 2021 - June 2023",
      points: [
        "Create restful APIs for new features and enhancement for the client’s e-commerce website. Integrated video conferencing and chat functionality using webrtc, socket.io technologies in client website.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "eClerx",
      icon: eClerx,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - July 2021",
      points: [
        "Perform pre and post live audit on client’s website to ensure the 100% quality.",
        "Asist seniors by converting normal html, CSS and js code to angular component structure.",
        "Create APIs using node.js for ongoing projects.",
        "Write test cases for testing different APIs.",
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
      name: "Multi-API Translation and Comparison Tool",
      description:
        "Developed a tool integrating Google Translate, MyMemory API, and OpenAI GPT for multilingual translation and comparison. Features include language selection, API evaluation, and fallback logic for reliable results.",
      tags: [
        {
          name: "API Integration",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: MultiApiTranslation,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car PathFinding Simulation",
      description:
        "Developed a web-based simulation showcasing cars navigating a grid-based map using pathfinding algorithms. Features include dynamic grid resizing, obstacle avoidance, and turn-based car movements with visually distinct assets.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "P5.js",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carPathFinding,
      source_code_link: "https://github.com/",
    },
    {
      name: "wonderMap",
      description:
        "WonderMap is a country-themed image search engine built with Java and Spark. It scrapes Wikipedia, enriches images using OpenCV and YOLO, and ranks results with a custom BM25 model. Deployed on Render with Docker, WonderMap showcases a full-stack approach combining information retrieval and computer vision.",
      tags: [
        {
          name: "SCSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
      ],
      image: wonderMap,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };