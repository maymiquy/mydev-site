"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { set } from "lodash";

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

export const BounceOnload = ({ children }) => {
 const controls = useAnimation();

 useEffect(() => {
  const onload = setTimeout(() => {
   controls.start({
    transform: [
     "scale3d(1, 1, 1)",
     "scale3d(1.8, 0.7, 1)",
     "scale3d(0.5, 1.5, 1)",
     "scale3d(1.5, 0.9, 1)",
     "scale3d(0.7, 2.1, 1)",
     "scale3d(1, 1, 1)",
    ],
    transition: {
     times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
    },
   });
  }, 500);

  return () => clearTimeout(onload);
 }, []);

 return (
  <>
   <motion.span className="w-fit inline-block" animate={controls}>
    {children}
   </motion.span>
  </>
 );
};
export const HeartBeat = ({ children }) => {
 const controls = useAnimation();

 useEffect(() => {
  const onload = setInterval(() => {
   controls.start({
    transform: [
     "scale3d(1, 1, 1)",
     "scale3d(1.8, 0.7, 1)",
     "scale3d(0.5, 1.5, 1)",
     "scale3d(1.5, 0.9, 1)",
     "scale3d(0.7, 2.1, 1)",
     "scale3d(1, 1, 1)",
    ],
    transition: {
     times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
    },
   });
  }, 3000);

  return () => clearInterval(onload);
 }, []);

 return (
  <>
   <motion.span className="w-fit" animate={controls}>
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
