import ProfileData from "../../components/profile-data";
import { getUser } from "../api/data-services";
import data from "../../lib/data.json";
import { ContainerAnimation } from "../../components/ui/container";
import TechStack from "../../components/tech-stack";

export default function ProfilePage({ searchParams: { customUsername } }) {
 const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 const promise = getUser(username);

 return (
  <div className="relative w-full min-h-screen">
   <ContainerAnimation>
    <div className="flex justify-center mx-auto max-w-7xl px-2 lg:px-4 pt-44 md:pt-24 lg:pt-32">
     <ProfileData promise={promise} />
    </div>
    <div className="flex justify-center max-w-fit bg-zinc-600 mx-auto mt-28 mb-16">
     <h1 className="text-zinc-100 text-3xl">Button</h1>
    </div>
   </ContainerAnimation>
   <div className="w-full h-px bg-zinc-800" />
   <div className="h-fit w-full py-24 px-6 space-y-10">
    <div className="text-center items-center">
     <h1 className="text-3xl text-zinc-100">Tech Stack</h1>
     <p className="text-zinc-600 text-md"> I also have the experience technology in both front-end and back-end. </p>
    </div>
    <TechStack />
   </div>
  </div>
 );
}
