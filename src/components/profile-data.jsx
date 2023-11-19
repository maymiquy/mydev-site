"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const ProfileData = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 3000));
 const user = await promise;

 const TextGradient = () => {
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

  return <h1 className={`text-xl lg:text-3xl ${colors[index]} font-bold`}>{user.name}</h1>;
 };

 const Typewriter = () => {
  return (
   <h1 className={`text-md lg:text-3xl text-zinc-100 font-bold`}>
    <TypeAnimation sequence={["I'm a Full-stack developer", 1000, "Advanced Front-end developer", 1000, "Intermediate Back-end developer", 1000, "Interested in mobile development", 1000]} speed={50} repeat={Infinity} />
   </h1>
  );
 };

 return (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_0.4fr] lg:grid-cols-[1.5fr_0.7fr] gap-6 space-y-8 md:space-y-2 md:space-x-12 items-center">
   <div className="w-full text-center md:text-start mx-auto lg:mx-0">
    <p className="text-lg lg:text-xl text-zinc-400">Hello i'm,</p>
    <TextGradient />
    <p className="text-xs lg:text-xl text-zinc-500 font-md">I'm currently collage at {user.company}</p>
    <Typewriter />
   </div>
   <div className="flex justify-center items-center w-52 h-52 lg:w-72 lg:h-72 mx-auto rounded-full bg-zinc-300">
    {" "}
    <Image alt="image profile" width={280} height={280} src={user.avatar_url} className="rounded-full" />
   </div>
  </div>
 );
};

export default ProfileData;
