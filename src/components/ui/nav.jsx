"use client";

import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const Navigation = () => {
 const ref = useRef(null);
 const [isIntersecting, setIntersecting] = useState(true);
 const searchParams = useSearchParams();
 const customUsername = searchParams.get("customUsername");
 const path = usePathname();

 useEffect(() => {
  if (!ref.current) return;
  const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

  observer.observe(ref.current);
  return () => observer.disconnect();
 }, []);

 return (
  <header ref={ref}>
   <nav className={`fixed inset-x-0 top-0 z-20 backdrop-blur duration-200 border-b ${isIntersecting ? "bg-zinc-900/0 border-transparent" : "border-zinc-800"}`}>
    <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
     <div className="flex justify-between gap-8 text-base">
      <Link
       href={"/profile" + (customUsername ? `?customUsername=${customUsername}` : "")}
       className={`duration-200 ${path === "/profile" ? "text-zinc-600 font-bold pointer-events-none" : "text-zinc-300 hover:text-zinc-100 hover:scale-110 duration-600"}`}
      >
       Profile
      </Link>
      <Link
       href={"/projects" + (customUsername ? `?customUsername=${customUsername}` : "")}
       className={`duration-200 ${path === "/projects" ? "text-zinc-600 font-bold pointer-events-none" : "text-zinc-300 hover:text-zinc-100 hover:scale-110 duration-600"}`}
      >
       Projects
      </Link>
      <Link
       href={"/contact" + (customUsername ? `?customUsername=${customUsername}` : "")}
       className={`duration-200 ${path === "/contact" ? "text-zinc-600 font-bold pointer-events-none" : "text-zinc-300 hover:text-zinc-100 hover:scale-110 duration-600"}`}
      >
       Contact
      </Link>
     </div>

     <Link href={"/" + (customUsername ? `?customUsername=${customUsername}` : "")} className="duration-200 text-zinc-200 hover:text-zinc-100">
      <ArrowLeftIcon className="w-6 h-6" />
     </Link>
    </div>
   </nav>
  </header>
 );
};
