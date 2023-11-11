"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProfileData = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 3000));
 const user = await promise;

 const AnimatedText = () => {
  const [count, setCount] = useState(0);
  const [text] = useState(["Im full-stack web development", "Advanced in front-end developer", "Intermediate in back-end developer", "Interested in mobile development"]);

  useEffect(() => {
   const interval = setInterval(() => {
    setCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
   }, 2000);

   return () => clearInterval(interval);
  }, [count]);

  return (
   <div className="mt-3 relative flex flex-col overflow-hidden">
    <p className="flex flex-col text-sm lg:text-2xl text-zinc-200 duration-200">{text[count]}.</p>
   </div>
  );
 };

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
   }, 2000);

   return () => clearInterval(interval);
  }, []);

  return <h1 className={`text-xl lg:text-3xl ${colors[index]} font-bold`}>{user.name}</h1>;
 };
 return (
  <>
   <div className="w-full text-center md:text-start mx-auto lg:mx-0">
    <p className="text-lg lg:text-xl text-zinc-400">Hello i'm</p>
    <TextGradient />
    <p className="text-xs lg:text-xl text-zinc-500 font-md">I'm currently collage in {user.company}</p>
    <AnimatedText />
   </div>
   <div className="flex justify-center items-center w-72 h-72 rounded-full bg-zinc-300">
    {" "}
    <Image alt="image profile" width={280} height={280} src={user.avatar_url} className="rounded-full" />
   </div>
  </>
 );
};

export default ProfileData;
