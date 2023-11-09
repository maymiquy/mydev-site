"use client";

import Image from "next/image";
import data from "../lib/data.json";
import { getUser } from "../app/api/data-services";
import React, { useState, useEffect } from "react";

const ProfileData = () => {
 const username = process.env.GITHUB_USERNAME || data.githubUsername;
 const promise = getUser(username);
 const [user, setUser] = useState(null);

 useEffect(() => {
  const fetchUser = async () => {
   const user = await promise;
   setUser(user);
  };

  fetchUser();
 }, [promise]);

 const [index, setIndex] = useState(0);
 const [colors] = useState(["from-blue-700 to-purple-500", "from-purple-700 to-blue-500", "from-purple-700 to-blue-700"]);

 useEffect(() => {
  const interval = setInterval(() => {
   setIndex(index + 1);

   if (index === 2) {
    setIndex(0);
   }
  }, 2000);

  return () => clearInterval(interval);
 }, [index]);

 const [count, setCount] = useState(0);
 const [text] = useState(["Im full-stack web development", "Advanced in front-end developer", "Intermediate in back-end developer", "Interested in mobile development"]);

 useEffect(() => {
  const interval = setInterval(() => {
   setCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
  }, 2000);

  return () => clearInterval(interval);
 }, [count]);

 return (
  <>
   <div className="w-full text-center md:text-start mx-auto lg:mx-0">
    <p className="text-lg lg:text-xl text-zinc-400">Hello i'm</p>
    <h1 className={`text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r ${colors.map((c, i) => (i === index ? c : "")).join(" ")} font-bold`}>{user?.name || data.displayName}</h1>
    <p className="text-xs lg:text-xl text-zinc-500 font-md">I'm currently collage in {user?.company || data.collage}</p>
    <div className="mt-3 relative flex flex-col overflow-hidden">
     <p className="flex flex-col text-sm lg:text-2xl text-zinc-200 duration-200">{text[count]}.</p>
    </div>
   </div>
   <div className="flex justify-center items-center w-72 h-72 rounded-full bg-zinc-300">
    {" "}
    <Image alt="👨‍💻" width={280} height={280} src={data.avatarUrl} className="rounded-full" />
   </div>
  </>
 );
};

export default ProfileData;
