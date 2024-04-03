import ProfileHero from "../../components/ui/profile-hero";
import { getUser } from "../api/data-services";
import data from "../../utils/data.json";
import { ContainerAnimation } from "../../components/partials/container";
import TechStack from "../../components/ui/tech-stack";
import { FileIcon } from "@primer/octicons-react";
import Link from "next/link";

export default function ProfilePage({ searchParams: { customUsername } }) {
 const username =
  customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 const promise = getUser(username);

 return (
  <div className="relative w-full min-h-screen">
   <ContainerAnimation>
    <ProfileHero promise={promise} />
   </ContainerAnimation>
   <div className="flex justify-center items-center w-full h-px bg-zinc-800">
    <Link
     href="/CV-MiqdamHambali(2).pdf"
     target="_blank"
     className="flex flex-row justify-center items-center w-fit h-fit rounded-lg duration-700 bg-zinc-700 hover:bg-zinc-800 p-3 space-x-2"
    >
     <FileIcon className="w-3 h-3 sm:h-4 sm:w-4 text-zinc-100" />
     <p className="text-zinc-100 font-semibold font-sans text-xs md:text-sm">
      Resume
     </p>
    </Link>
   </div>

   <div className="h-fit w-full py-24 px-6">
    <div className="flex flex-col justify-center items-center space-y-6">
     <div className="text-center items-center">
      <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-zinc-100">
       Tech Stack
      </h1>
      <p className="text-zinc-500 text-sm md:text-md font-medium">
       My experience technology in software development.
      </p>
     </div>
     <TechStack />
    </div>
   </div>
  </div>
 );
}
