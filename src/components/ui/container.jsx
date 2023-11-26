"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export const ContainerAnimation = ({ children }) => {
 const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
 const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

 function onMouseMove({ currentTarget, clientX, clientY }) {
  const { left, top } = currentTarget.getBoundingClientRect();
  mouseX.set(clientX - left);
  mouseY.set(clientY - top);
 }
 let maskImage = useMotionTemplate`radial-gradient(140px at ${mouseX}px ${mouseY}px, white, transparent)`;
 let style = { maskImage, WebkitMaskImage: maskImage };

 return (
  <div
   onMouseMove={onMouseMove}
   className="relative min-h-max xl:min-h-screen w-full duration-700"
  >
   <div className="pointer-events-none">
    <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
    <motion.div
     className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
     style={style}
    />
    <motion.div
     className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
     style={style}
    />
   </div>
   {children}
  </div>
 );
};
