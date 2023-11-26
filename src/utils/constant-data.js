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
         { name: "HTML", icon: <SiHtml5 color="#E34F26" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "CSS", icon: <SiCss3 color="#1572B6" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "JavaScript", icon: <SiJavascript color="#f7df1e" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "TypeScript", icon: <SiTypescript color="#377cc8" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "PHP", icon: <SiPhp color="#777BB4" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Dart", icon: <SiDart color="#0175C2" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Python", icon: <SiPython color="#3776AB" className="w-7 h-7 md:w-13 md:h-13" /> },
      ]
   },
   {
      category: "Front-end",
      description: "Anvanced stack in Front-end",
      items: [
         { name: "React JS", icon: <SiReact color="#53c1de" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Next JS", icon: <SiNextdotjs color="#ffffff" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Vite JS", icon: <SiVite color="#646CFF" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Redux", icon: <SiRedux color="#764ABC" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Framer", icon: <SiFramer color="#0055FF" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Chakra UI", icon: <SiChakraui color="#319795" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" className="w-7 h-7 md:w-13 md:h-13" /> },
      ]
   },
   {
      category: "Back-end",
      description: "Intermediate stack in Back-end",
      items: [
         { name: "Laravel", icon: <SiLaravel color="#ff2d20" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Node JS", icon: <SiNodedotjs color="#4caf50" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Express JS", icon: <SiExpress color="#ffffff" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "MySQL", icon: <SiMysql color="#4479A1" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "MongoDB", icon: <SiMongodb color="#47a248" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "PostgreSQL", icon: <SiPostgresql color="#4169e1" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "JSON", icon: <SiJson color="#ffffff" className="w-7 h-7 md:w-13 md:h-13" /> },
      ]
   },
   {
      category: "Tools",
      description: "Knowledge Tools",
      items: [
         { name: "Git", icon: <SiGit color="#f4511e" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "GitHub", icon: <SiGithub color="#ffffff" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "NPM", icon: <SiNpm color="#CB3837" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Composer", icon: <SiComposer color="#ffffff" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "PNPM", icon: <SiPnpm color="#f69220" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "Vercel", icon: <SiVercel color="#ffffff" className="w-7 h-7 md:w-13 md:h-13" /> },
         { name: "XAMPP", icon: <SiXampp color="#FB7A24" className="w-7 h-7 md:w-13 md:h-13" /> },
      ]
   }
];

export const getInitAbout = [
   { question: "Who am i ?", answer: "Im Miqdam Ferdiansyah Hambali " },
]
