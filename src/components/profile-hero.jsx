import Image from "next/image";
import { TextGradient, Typewriter } from "./ui/text-animation";

const ProfileHero = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 3000));
 const user = await promise;

 return (
  <div className="flex justify-center mx-auto max-w-7xl px-2 lg:px-4 pt-44 md:pt-24 lg:pt-32">
   <div className="grid grid-cols-1 md:grid-cols-[1fr_0.4fr] lg:grid-cols-[1.5fr_0.7fr] gap-6 space-y-8 md:space-y-2 md:space-x-12 items-center">
    <div className="w-full text-center md:text-start mx-auto lg:mx-0">
     <p className="text-lg lg:text-xl text-zinc-400">Hello i'm,</p>
     <TextGradient name={user.name} />
     <p className="text-xs lg:text-xl text-zinc-500 font-md">
      I'm currently college at {user.company}
     </p>
     <Typewriter />
    </div>
    <div className="flex justify-center items-center w-52 h-52 lg:w-72 lg:h-72 mx-auto rounded-full bg-zinc-300">
     {" "}
     <Image
      alt="image profile"
      width={280}
      height={280}
      src={user.avatar_url}
      className="rounded-full"
     />
    </div>
   </div>
  </div>
 );
};

export default ProfileHero;
