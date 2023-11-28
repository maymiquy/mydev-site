import {
   SiBootstrap,
   SiChakraui,
   SiComposer,
   SiCss3,
   SiDart,
   SiExpress,
   SiFramer,
   SiGit,
   SiGithub,
   SiHtml5,
   SiJavascript,
   SiJson,
   SiLaravel,
   SiMongodb,
   SiMysql,
   SiNextdotjs,
   SiNodedotjs,
   SiNpm,
   SiPhp,
   SiPnpm,
   SiPostgresql,
   SiPython,
   SiReact,
   SiRedux,
   SiTailwindcss,
   SiTypescript,
   SiVercel,
   SiVite,
   SiXampp
} from "@icons-pack/react-simple-icons";


export const TechData = [
   {
      category: "Language",
      description: "Knowledge Language",
      items: [
         { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
         { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
         { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
         { name: "TypeScript", icon: <SiTypescript color="#377cc8" /> },
         { name: "PHP", icon: <SiPhp color="#777BB4" /> },
         { name: "Dart", icon: <SiDart color="#0175C2" /> },
         { name: "Python", icon: <SiPython color="#3776AB" /> },
      ]
   },
   {
      category: "Front-end",
      description: "Anvanced stack in Front-end",
      items: [
         { name: "React JS", icon: <SiReact color="#53c1de" /> },
         { name: "Next JS", icon: <SiNextdotjs color="#ffffff" /> },
         { name: "Vite JS", icon: <SiVite color="#646CFF" /> },
         { name: "Redux", icon: <SiRedux color="#764ABC" /> },
         { name: "Framer", icon: <SiFramer color="#0055FF" /> },
         { name: "Chakra UI", icon: <SiChakraui color="#319795" /> },
         { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
         { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      ]
   },
   {
      category: "Back-end",
      description: "Intermediate stack in Back-end",
      items: [
         { name: "Laravel", icon: <SiLaravel color="#ff2d20" /> },
         { name: "Node JS", icon: <SiNodedotjs color="#4caf50" /> },
         { name: "Express JS", icon: <SiExpress color="#ffffff" /> },
         { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
         { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
         { name: "PostgreSQL", icon: <SiPostgresql color="#4169e1" /> },
         { name: "JSON", icon: <SiJson color="#ffffff" /> },
      ]
   },
   {
      category: "Tools",
      description: "Knowledge Tools",
      items: [
         { name: "Git", icon: <SiGit color="#f4511e" /> },
         { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
         { name: "NPM", icon: <SiNpm color="#CB3837" /> },
         { name: "Composer", icon: <SiComposer color="#ffffff" /> },
         { name: "PNPM", icon: <SiPnpm color="#f69220" /> },
         { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
         { name: "XAMPP", icon: <SiXampp color="#FB7A24" /> },
      ]
   }
];

export const getInitAbout = [
   { question: "Who am i ?", answer: "Im Miqdam Ferdiansyah Hambali " },
]
