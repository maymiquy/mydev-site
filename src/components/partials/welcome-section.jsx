import React from "react";
import { AnimationBounce, BounceOnload } from "../ui/animation";
import ImageProfile from "../ui/image-profile";
import WelcomeTypography from "../ui/welcome-typography";
import { getUser } from "../../app/api/data-services";
import data from "../../utils/data.json";

const WelcomeSection = ({ username }) => {
 const setUser = username || process.env.GITHUB_USERNAME || data.githubUsername;
 const user = getUser(setUser);
 const splitUsername = setUser.split("");
 return (
  <>
   <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

   <div className="max-h-fit z-10 animate-title duration-1000 md:overflow-hidden flex flex-row justify-center">
    <h1 className="md:flex items-center hidden bg-gradient-to-r from-zinc-400 to-zinc-100 hover:from-zinc-600 hover:to-zinc-300 text-transparent bg-clip-text cursor-default text-edge-outline font-display text-7xl md:text-9xl whitespace-nowrap">
     {splitUsername.map((word, index) => (
      <AnimationBounce key={index}>
       <BounceOnload>{word === " " ? "\u00A0" : word}</BounceOnload>
      </AnimationBounce>
     ))}
    </h1>
    <AnimationBounce>
     <ImageProfile promise={user} />
    </AnimationBounce>
   </div>

   <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

   <div className="my-16 text-center px-6 md:px-0 animate-fade-in">
    <h1 className="text-sm sm:text-lg text-zinc-300 tracking-tight">
     <WelcomeTypography promise={user} />
    </h1>
   </div>
  </>
 );
};

export default WelcomeSection;
