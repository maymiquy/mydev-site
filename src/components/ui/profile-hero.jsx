import Image from "next/image";
import {
 AnimationBounce,
 BounceOnload,
 Typewriter,
} from "../partials/animation";

const ProfileHero = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 1000));
 const user = await promise;
 const sentence = "Hello I'm,".split("");
 const name = "Miqdam Hambali".split("");

 return (
  <div className="flex justify-center mx-auto max-w-7xl px-2 lg:px-4 pt-36 md:pt-28 lg:pt-32 pb-16 md:pb-28 lg:pb-0">
   <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_0.4fr] lg:grid-cols-[1.5fr_0.7fr] gap-6 space-y-8 md:space-y-2 md:space-x-12 items-center">
    <div className="w-full text-center md:text-start mx-auto lg:mx-0">
     <div className="text-xl lg:text-3xl text-edge-outline font-display">
      {sentence.map((word, index) => (
       <BounceOnload>
        <AnimationBounce key={index}>
         {word === " " ? "\u00A0" : word}
        </AnimationBounce>
       </BounceOnload>
      ))}
     </div>
     <div className="inline-block text-2xl md:text-6xl font-bold text-edge-outline font-display whitespace-nowrap">
      {name.map((word, index) => (
       <BounceOnload>
        <AnimationBounce key={index}>
         {word === " " ? "\u00A0" : word}
        </AnimationBounce>
       </BounceOnload>
      ))}
     </div>
     <p className="text-md md:text-xl text-zinc-500 font-medium">
      {user.company === "Sekolah Tinggi Teknologi Terpadu Nurul Fikri" ||
      user.company === "STT Terpadu Nurul Fikri"
       ? "I'm currently college at "
       : "I'm software engineer intern at "}
      {user.company}
     </p>
     <Typewriter />
    </div>
    <div className="flex justify-center items-center w-52 h-52 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden">
     {" "}
     <Image
      alt="image profile"
      width={288}
      height={288}
      src="/53952993849 (1).jpg"
      className="rounded-full self-start"
     />
    </div>
   </div>
  </div>
 );
};

export default ProfileHero;
