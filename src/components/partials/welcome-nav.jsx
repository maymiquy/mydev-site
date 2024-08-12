import React from "react";
import { BounceOnload, HeartBeat } from "../ui/animation";
import Link from "next/link";

const WelcomeNavigation = () => {
 const navigation = [
  { name: "Profile", href: "/profile" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
 ];

 return (
  <nav className="my-16 animate-fade-in">
   <ul className="flex items-center justify-center gap-4">
    {navigation.map((item) => (
     <HeartBeat>
      <BounceOnload>
       <Link
        key={item.href}
        href={item.href}
        className="text-md sm:text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed hover:border-solid p-2 rounded border-2 border-zinc-500 hover:border-zinc-300"
       >
        {item.name}
       </Link>
      </BounceOnload>
     </HeartBeat>
    ))}
   </ul>
  </nav>
 );
};

export default WelcomeNavigation;
