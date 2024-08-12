"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card } from "../partials/card";
import { experience } from "../../utils/constant-experience";

const WorkExperience = () => {
 const cardsContainerRef = useRef(null);
 const containerRef = useRef(null);
 const isInView = useInView(containerRef, { once: true });
 const cardsControls = useAnimation();

 useEffect(() => {
  const cardsContainer = cardsContainerRef.current;
  let animationFrameId;
  let currentTranslateX = 0;
  const scrollSpeed = 1;

  const startAutoScroll = () => {
   const scrollStep = () => {
    currentTranslateX -= scrollSpeed;
    cardsControls.set({ x: currentTranslateX });

    if (
     currentTranslateX <=
     -(cardsContainer.scrollWidth - cardsContainer.clientWidth)
    ) {
     currentTranslateX = 0;
    }

    animationFrameId = requestAnimationFrame(scrollStep);
   };

   animationFrameId = requestAnimationFrame(scrollStep);
  };

  const stopAutoScroll = () => {
   if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
   }
  };

  if (isInView) {
   startAutoScroll();
  }

  return () => {
   stopAutoScroll();
  };
 }, [cardsControls, isInView]);

 const loopedExperiences = [...experience, ...experience, ...experience];

 return (
  <div className="bg-zinc-900 space-y-4 bg-opacity-40 rounded-xl shadow-xl p-6 xl:col-span-2 xl:row-span-1">
   <h3 className="text-md md:text-lg font-bold text-zinc-100">Experience</h3>
   <div
    ref={containerRef}
    className="relative w-full flex justify-center max-w-[1000px] overflow-hidden antialiased"
   >
    <motion.div
     className="relative z-20 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
     ref={cardsContainerRef}
    >
     <motion.ul
      className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
      animate={cardsControls}
      initial={{ x: 0 }}
     >
      {loopedExperiences.map((item, index) => (
       <Card classname="duration-700" key={index}>
        <li className="relative w-[350px] max-w-full flex-shrink-0 px-8 py-6 md:w-[450px] text-zinc-400">
         <span className="relative z-20 text-sm font-normal leading-[1.6] md:text-base text-zinc-300">
          {item.title}
         </span>
         <div className="relative z-20 mt-6 flex flex-row items-center">
          <span className="flex flex-col gap-1">
           <span className="text-xs font-normal leading-[1.6] text-muted-foreground">
            {item.duration}
           </span>
           <span className="text-xs font-normal leading-[1.6] text-muted-foreground">
            {item.description}
           </span>
          </span>
         </div>
        </li>
       </Card>
      ))}
     </motion.ul>
    </motion.div>
   </div>
  </div>
 );
};

export default WorkExperience;
