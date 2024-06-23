import {Github, Linkedin} from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoFortunes from "/public/images/company-logos/Fortunes_Tech.png";
import LogoHippo from "/public/images/company-logos/hippo.png";
import LogoMango from "/public/images/company-logos/mango.png";
import LogoToptal from "/public/images/company-logos/toptal.png";
import LogoMajesco from "/public/images/company-logos/majesco.png";
import LogoHomesite from "/public/images/company-logos/homesite.png";

import ProjectBookvid from "/public/images/project/project-bookvid.png";
import ProjectPirateWires from "/public/images/project/project-piratewires.png";

import AvatarJesse from "/public/images/avatar/avatar-jesse.png";
import AvatarEric from "/public/images/avatar/avatar-eric.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/xinlugui",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/xinlu-gui",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoFortunes,
    logoAlt: "Fortunes Tech logo",
    position: "Senior Software Engineer",
    companyName: "Fortunes Tech",
    startDate: new Date(2021, 7),
    currentlyWorkHere: true,
    summary: [
      "Developed and maintained scalable web applications for high-traffic online auction platform using message queuing techniques, enhancing user experience and operational efficiency.",
      "Led the microservices-based backend system development, resulting in an improvement in system resilience and reduction in latency.",
      "Spearheaded adoption of containerization technologies like Docker and Kubernetes, and integrated Continuous Integration/Continuous Deployment (CI/CD) pipelines, streamlining deployment processes, enhancing development to production workflows, and ensuring seamless, automated updates and scalability.",
      "Successfully integrated multiple payment gateways into ecommerce platform to support global transactions, implemented a powerful search feature using Elasticsearch for real-time, accurate product searches, and seamlessly integrated various marketing tools including Google Analytics and Mailchimp to enhance campaign effectiveness and drive sales growth.",
      "Collaborated with cross-functional teams on UI/UX design and customer support, implementing responsive design principles that led to an increase in mobile user engagement.",
      "Directed a team of software engineers and mentored junior developers through code reviews contributing to an increase in team productivity and skill enhancement.",
    ],
  },
  {
    logo: LogoHippo,
    logoAlt: "Hippo Insurance logo",
    position: "Senior Software Engineer",
    companyName: "Hippo Insurance",
    startDate: new Date(2019, 4),
    endDate: new Date(2021, 7),
    summary: [
      "Led the design and implementation of homeowners, property and life insurance underwriting software, which streamlined risk assessment processes and reduced underwriting time by 30%, enhancing client satisfaction and throughput.",
      "Spearheaded the implementation of API integration with multiple insurance carriers, enhancing quick quoting features that reduced quote generation time by 30% for agents.",
      "Collaborated with data engineering teams to develop an AI-driven tool using satellite imagery analysis, improving wildfire risk assessments by 40% and supporting underwriting decisions.",
      "Led the development and integration of online signature capabilities using Dropbox Sign, achieving a 35% increase in document processing speed and enhancing customer experience.",
      "Implemented a seamless integration with Ivans to automate data exchanges, which enhanced data accuracy by 20% and reduced manual data entry by 50%.",
    ],
  },
  {
    logo: LogoMango,
    logoAlt: "Mango Languages logo",
    position: "Software Engineer",
    companyName: "Mango Languages",
    startDate: new Date(2014, 4),
    endDate: new Date(2017, 10),
    summary: [
      "Designed a comprehensive analytics dashboard that provides educators and administrators with real-time insights into student performance, engagement levels, and course effectiveness, enabling data-driven decision making.",
      "Implemented gamification elements like points, badges, and leaderboards, which increased daily active users by 40% by making learning more fun and competitive.",
      "Developed interactive 3D visualizations of complex educational content using Three.js and BabylonJS, enhancing user engagement and understanding by providing dynamic, manipulable models in web-based learning platforms.",
      "Engineered a virtual classroom environment with interactive features like live polling, breakout rooms, and real-time feedback using WebRTC and Socket.io, enhancing the quality of remote instruction and student participation.",
      "Architected and implemented a robust content management system for the platform that allows educators to easily create, update, and manage digital content, including video lessons and downloadable resources, streamlining the content delivery process.",
      "Led the initiative to ensure all web applications meet WCAG 2.1 accessibility standards, implementing features like text-to-speech, highcontrast modes, and keyboard navigability to support learners with various disabilities.",
    ],
  },
  {
    logo: LogoToptal,
    logoAlt: "Toptal logo",
    position: "Software Engineer",
    companyName: "Toptal",
    startDate: new Date(2014, 4),
    endDate: new Date(2017, 10),
    summary: [
      "Designed and developed over 5 mobile and SaaS applications improving average customer engagement and receiving 4.5֡ star ratings on app stores.",
      "Collaborated with cross-functional teams in Agile environments, enhancing project delivery speed and improving team satisfaction scores.",
      "Integrated with CMS solutions for content-heavy websites including Directus, Strapi, Sanity, CoreUI and KeystoneJS allowing for faster content updates and an increase in SEO rankings.",
      "Developed a dynamic integration between CRM services like Zoho, HubSpot and Zendesk, enabling real-time customer data updates and personalized marketing campaigns, resulting in an increase in customer retention.",
      "Led the initiative to make a flagship web application fully compliant with WCAG 2.1 guidelines, enhancing accessibility for users with disabilities and increasing the user base.",
      "Developed and maintained a comprehensive suite of unit tests and end-to-end tests achieving over high code coverage, which significantly reduced the number of post deployment bugs, reliability and fast deployment speed.",
    ],
  },
  {
    logo: LogoMajesco,
    logoAlt: "Mango Languages logo",
    position: "Software Engineer",
    companyName: "Mango Languages",
    startDate: new Date(2013, 6),
    endDate: new Date(2014, 4),
    summary: [
      "Introduced microservices-based solutions to modernize legacy insurance systems, allowing insurance carriers to improve flexibility, reduce operational costs, and accelerate the launch of new insurance products.",
      "Collaborated with insurance carriers to customize API integrations, meeting unique business requirements and regulatory compliance needs, resulting in an improvement in data processing times and reduction in manual data entry errors.",
      "Developed and maintained robust APIs for Majesco's insurance platform, enabling seamless integration with external systems, such as third-party underwriting, claims management, and customer service applications, enhancing the interoperability of insurance carriers' ecosystems.",
      "Implemented analytics and monitoring tools for API usage, providing insights into performance bottlenecks, usage patterns, and opportunities for optimization, leading to an improvement in API response times and enhanced service reliability.",
    ],
  },
  {
    logo: LogoHomesite,
    logoAlt: "Mango Languages logo",
    position: "Software Engineer",
    companyName: "Mango Languages",
    startDate: new Date(2012, 5),
    endDate: new Date(2013, 6),
    summary: [
      "Collaborated with a cross-functional team to develop and a mobile app for policy management, which led to increase in customer engagement and an improvement in customer satisfaction scores.",
      "Contributed to a team project that redesigned the claim processing workflow, incorporating automation tools that sped up claim resolution, significantly improving customer satisfaction during the claim process.",
      "Spearheaded the integration of third-party agent portals with Homesite's underwriting system, facilitating real-time data exchange and streamlining the underwriting process for agents, which led to an increase in underwriting efficiency and agent satisfaction.",
      "Integrated with an AI-driven model for wildfire risk detection, utilizing satellite imagery and environmental data to assess property risks accurately, reducing underwriting errors and enhancing policy pricing accuracy.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Bookvid",
    description:
      "Bookvid is an AI-powered marketplace to help entrepreneurs monetize video sessions up to 100,000 people. It allows clients to easily schedule and pay for group calls, masterminds, packages or 1:1 video calls.",
    url: "https://www.bookvid.com",
    previewImage: ProjectBookvid,
    technologies: [
      "Next",
      "Radix UI",
      "Styled Component",
      "React Query",
      "Next Auth",
      "Typescript",
      "Flask",
      "Python",
      "SQLAlchemy",
      "MySQL",
      "Livekit",
      "Daily",
      "CometChat",
      "Stripe",
      "GCP",
    ],
  },
  {
    name: "Pirate Wires",
    description:
      "Pirate Wires, an American media company reporting at the intersection of technology, politics, and culture.",
    url: "https://www.piratewires.com",
    previewImage: ProjectPirateWires,
    technologies: [
      "Next",
      "Styled Component",
      "SASS",
      "Typescript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Customer.io",
      "Sentry.io",
      "Vercel",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Jesse Linson",
    personAvatar: AvatarJesse,
    title: "Founder - Bookvid",
    testimonial:
      "Working with Xinlu Gui was a pleasure. Their deep technical expertise and dedication were evident throughout the project. They delivered an outstanding solution that not only met but exceeded our expectations, and did so ahead of schedule.",
  },
  {
    personName: "Eric Button",
    personAvatar: AvatarEric,
    title: "COO - Pirate Wires",
    testimonial:
      "Xinlu Gui's professionalism and attention to detail made a significant impact on our project. They consistently provided innovative solutions to complex problems. The results were exceptional, and their commitment to delivering high-quality work was evident in every aspect of the project.",
  },
];
