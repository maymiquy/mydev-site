"use client";

import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const AnimationBounce = ({ children }) => {
 const controls = useAnimationControls();
 const [isPlaying, setIsPlaying] = useState(false);
 const setBounce = () => {
  controls.start({
   transform: [
    "scale3d(1, 1, 1)",
    "scale3d(1.4, .55, 1)",
    "scale3d(.75, 1.25, 1)",
    "scale3d(1.25, .85, 1)",
    "scale3d(.9, 1.85, 1)",
    "scale3d(1, 1, 1)",
   ],
   transition: {
    times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
   },
  });
  setIsPlaying(true);
 };

 return (
  <>
   <motion.span
    className="inline-block text-zinc-100 hover:text-zinc-400"
    animate={controls}
    onMouseOver={() => {
     if (!isPlaying) setBounce();
    }}
    onAnimationComplete={() => setIsPlaying(false)}
   >
    {children}
   </motion.span>
  </>
 );
};

export const Typewriter = () => {
 return (
  <h1 className={`text-xl md:text-2xl lg:text-3xl text-zinc-100 font-bold`}>
   <TypeAnimation
    sequence={[
     "I'm a Full-stack developer",
     1000,
     "Advanced Front-end developer",
     1000,
     "Intermediate Back-end developer",
     1000,
     "Interested in mobile development",
     1000,
    ]}
    speed={50}
    repeat={Infinity}
   />
  </h1>
 );
};

// export const TextGradient = ({ name }) => {
//  const [index, setIndex] = useState(0);
//  const colors = [
//   "bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500",
//   "bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500",
//   "bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700",
//  ];

//  useEffect(() => {
//   const interval = setInterval(() => {
//    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
//   }, 1000);

//   return () => clearInterval(interval);
//  }, []);

//  return (
//   <h1 className={`text-xl lg:text-3xl ${colors[index]} font-bold`}>{name}</h1>
//  );
// };
