import Link from "next/link";
import Image from "next/image";
import React from "react";
import data from "../lib/data.json";
import { RecentActivity } from "../components/recent-activity";
import { getUser } from "./api/data-services";

const navigation = [
 { name: "Profile", href: "/profile" },
 { name: "Projects", href: "/projects" },
 { name: "Contact", href: "/contact" },
];

export default function Home({ searchParams: { customUsername } }) {
 const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 const promise = getUser(username);

 return (
  <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/30 to-black">
   <nav className="my-16 animate-fade-in">
    <ul className="flex items-center justify-center gap-4">
     {navigation.map((item) => (
      <Link
       key={item.href}
       href={item.href + (customUsername ? `?customUsername=${customUsername}` : "")}
       className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed hover:border-solid p-2 rounded border-2 border-zinc-500 hover:border-zinc-300"
      >
       {item.name}
      </Link>
     ))}
    </ul>
   </nav>
   <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

   <div className="max-h-fit z-10 hover:scale-110 animate-title duration-1000 md:overflow-hidden flex flex-row justify-center">
    <h1 className="md:flex items-center hidden bg-gradient-to-r from-zinc-400 to-zinc-100 hover:from-blue-700 hover:to-purple-700 text-transparent bg-clip-text cursor-default text-edge-outline font-display text-7xl md:text-9xl whitespace-nowrap">
     {username}
    </h1>
    <UserIcon promise={promise} />
   </div>

   <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
   <div className="my-16 text-center px-6 md:px-0 animate-fade-in">
    <h1 className="text-sm sm:text-lg text-zinc-300 tracking-tight">
     <UserText promise={promise} />
     <RecentActivity username={username} />
    </h1>
   </div>
  </main>
 );
}

const UserIcon = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 3000));
 const user = await promise;

 return <Image alt="image" width={150} height={150} src={user.avatar_url || data.avatarUrl} className="rounded-full w-72 h-72 md:w-40 md:h-40 mb-4 md:mb-12" />;
};

const UserText = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 3000));
 const user = await promise;
 console.log(user);

 return (
  <>
   <p className="block md:hidden">Hello, I'm </p>
   <p className="hidden md:block text-sm font-bold">A.K.A</p>
   <p className="font-bold">{user.name || data.displayName}</p>
   <p>Im a full-stack developer, Now i'm currently college at {user.company}.</p>
  </>
 );
};
