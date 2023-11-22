"use client";

import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export const TextGradient = ({ name }) => {
 const [index, setIndex] = useState(0);
 const colors = [
  "bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500",
  "bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500",
  "bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700",
 ];

 useEffect(() => {
  const interval = setInterval(() => {
   setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  }, 1000);

  return () => clearInterval(interval);
 }, []);

 return (
  <h1 className={`text-xl lg:text-3xl ${colors[index]} font-bold`}>{name}</h1>
 );
};

export const Typewriter = () => {
 return (
  <h1 className={`text-md lg:text-3xl text-zinc-100 font-bold`}>
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
