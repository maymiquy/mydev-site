import React from "react";
import {
 AnimationBounce,
 BounceOnload,
 Typewriter,
} from "../partials/animation";
import Image from "next/image";

const PersonalInfo = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 1000));
 const user = await promise;
 const sentence = "Hello I'm,".split("");
 const name = "Miqdam Hambali".split("");

 return (
  <div className="bg-zinc-900 flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 justify-center lg:justify-between items-center bg-opacity-40 rounded-xl shadow-xl py-10 md:py-6 px-8 xl:col-span-2 xl:row-span-1">
   <div className="w-full text-center lg:text-start mx-auto lg:mx-0">
    <div className="text-xl lg:text-2xl xl:text-3xl text-edge-outline font-display">
     {sentence.map((word, index) => (
      <BounceOnload>
       <AnimationBounce key={index}>
        {word === " " ? "\u00A0" : word}
       </AnimationBounce>
      </BounceOnload>
     ))}
    </div>
    <div className="inline-block text-2xl md:text-4xl lg:text-6xl font-bold text-edge-outline font-display whitespace-nowrap">
     {name.map((word, index) => (
      <BounceOnload>
       <AnimationBounce key={index}>
        {word === " " ? "\u00A0" : word}
       </AnimationBounce>
      </BounceOnload>
     ))}
    </div>
    <p className="text-md md:text-lg lg:text-xl text-zinc-500 font-medium">
     {user.company === "Sekolah Tinggi Teknologi Terpadu Nurul Fikri" ||
     user.company === "STT Terpadu Nurul Fikri"
      ? "I'm currently college at "
      : "I'm software engineer intern at "}
     {user.company}
    </p>
    <Typewriter />
   </div>
   <Image
    alt="image profile"
    width={192}
    height={192}
    src="/53952993849 (1).jpg"
    className="w-44 h-44 md:w-48 md:h-48 rounded-full"
   />
  </div>
 );
};

export default PersonalInfo;
