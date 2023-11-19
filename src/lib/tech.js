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
      description: "Knowledge languages",
      items: [
         { name: "HTML", icon: <SiHtml5 size={40} color="#E34F26" /> },
         { name: "CSS", icon: <SiCss3 size={40} color="#1572B6" /> },
         { name: "JavaScript", icon: <SiJavascript size={40} color="#f7df1e" /> },
         { name: "TypeScript", icon: <SiTypescript size={40} color="#377cc8" /> },
         { name: "PHP", icon: <SiPhp size={40} color="#777BB4" /> },
         { name: "Dart", icon: <SiDart size={40} color="#0175C2" /> },
         { name: "Python", icon: <SiPython size={40} color="#3776AB" /> },
      ]
   },
   {
      category: "Front-end",
      description: "Anvanced stack in Front-end",
      items: [
         { name: "React JS", icon: <SiReact size={40} color="#53c1de" /> },
         { name: "Next JS", icon: <SiNextdotjs size={40} color="#ffffff" /> },
         { name: "Vite JS", icon: <SiVite size={40} color="#646CFF" /> },
         { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
         { name: "Framer", icon: <SiFramer size={40} color="#0055FF" /> },
         { name: "Chakra UI", icon: <SiChakraui size={40} color="#319795" /> },
         { name: "Tailwind", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
         { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952B3" /> },
      ]
   },
   {
      category: "Back-end",
      description: "Intermediate stack in Back-end",
      items: [
         { name: "Laravel", icon: <SiLaravel size={40} color="#ff2d20" /> },
         { name: "Node JS", icon: <SiNodedotjs size={40} color="#4caf50" /> },
         { name: "Express JS", icon: <SiExpress size={40} color="#ffffff" /> },
         { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
         { name: "MongoDB", icon: <SiMongodb size={40} color="#47a248" /> },
         { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#4169e1" /> },
         { name: "JSON", icon: <SiJson size={40} color="#ffffff" /> },
      ]
   },
   {
      category: "Tools",
      description: "Knowledge of Tools and DevOps",
      items: [
         { name: "Git", icon: <SiGit size={40} color="#f4511e" /> },
         { name: "GitHub", icon: <SiGithub size={40} color="#ffffff" /> },
         { name: "NPM", icon: <SiNpm size={40} color="#CB3837" /> },
         { name: "Composer", icon: <SiComposer size={40} color="#ffffff" /> },
         { name: "PNPM", icon: <SiPnpm size={40} color="#f69220" /> },
         { name: "Vercel", icon: <SiVercel size={40} color="#ffffff" /> },
         { name: "XAMPP", icon: <SiXampp size={40} color="#FB7A24" /> },
      ]
   }
];