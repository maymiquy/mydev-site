import React from "react";
import { BounceOnload } from "./animation";

const WelcomeTypography = async ({ promise, data }) => {
 await new Promise((resolve) => setTimeout(resolve, 500));
 const user = await promise;

 return (
  <>
   <p className="block md:hidden text-sm font-bold">Hello, I'm </p>
   <p className="hidden md:block text-md font-bold">A.K.A</p>
   <p className="font-bold text-xl sm:text-3xl">
    <BounceOnload>{user.name || data.displayName}</BounceOnload>
   </p>
   <p className="text-sm hidden md:block text-zinc-500 font-sans mt-2">
    Passionate and driven software development with a strong foundation in web
    development.{" "}
   </p>
   <p className="text-xs md:text-sm text-zinc-500 font-sans font-normal mt-2 md:mt-0">
    Dedicated to contribute my expertise to a forward-thinking team, while
    continuously learning and growing in the ever-evolving world of technology.
   </p>
  </>
 );
};

export default WelcomeTypography;
