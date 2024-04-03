import Link from "next/link";
import { Card } from "../../components/partials/card";
import data from "../../utils/data.json";
import { getUser, getSocialAccounts } from "../api/data-services";
import {
 SiInstagram,
 SiLinkedin,
 SiGithub,
 SiMaildotru,
} from "@icons-pack/react-simple-icons";

export const runtime = "nodejs";

export default async function Contacts({ searchParams: { customUsername } }) {
 const name = customUsername || process.env.GITHUB_NAME || data.displayName;
 const username =
  customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 // Get user and socials.
 const userData = getUser(username);
 const socialsData = getSocialAccounts(username);
 const [user, githubSocials] = await Promise.all([userData, socialsData]);
 const email = user.email || data.email;
 const contancts = [];
 if (email) {
  contancts.push({
   icon: <SiMaildotru size={20} />,
   href: "mailto:" + email,
   label: "Email",
   handle: email,
  });
 }
 contancts.push({
  icon: <SiGithub size={20} />,
  href: "https://github.com/" + username,
  label: "Github",
  handle: username,
 });

 githubSocials.forEach((data) => {
  switch (data.provider) {
   case "linkedin":
    contancts.push({
     icon: <SiLinkedin size={20} />,
     href: data.url,
     label: data.url.split("/")[2],
     handle: name,
    });
    break;
   default:
    contancts.push({
     icon: <SiInstagram size={20} />,
     href: data.url,
     label: data.url.split("/")[2],
     handle: data.url.split("/").pop(),
    });
    break;
  }
 });

 return (
  <div className="container flex items-center justify-center min-h-screen pb-12 pt-32 px-4 mx-auto">
   <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
    {contancts.map((data) => {
     return (
      <Card key={data.label}>
       <Link
        href={data.href}
        target="_blank"
        className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-24 lg:pb-48 md:p-16 sm:p-8"
       >
        <span
         className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
         aria-hidden="true"
        />
        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
         {data.icon}
        </span>{" "}
        <div className="z-10 flex flex-col items-center">
         <span
          className={`whitespace-nowrap text-sm font-medium duration-150 xl:text-lg text-zinc-200 group-hover:text-white font-display`}
         >
          {data.handle}
         </span>
         <span className="mt-4 text-sm md:text-lg text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {data.label}
         </span>
        </div>
       </Link>
      </Card>
     );
    })}
   </div>
  </div>
 );
}
