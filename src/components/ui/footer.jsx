import { MarkGithubIcon } from "@primer/octicons-react";

export default function Footer() {
 return (
  <footer className="w-full p-3 flex justify-center items-center bg-zinc-900/500 duration-200 border-t border-zinc-800">
   <div className="w-full flex flex-col text-center items-center space-y-3">
    <h6 className="text-xs font-semibold tracking-wide text-zinc-300 sm:text-md">
     Integrated with <MarkGithubIcon size={15} className="mx-1" />
    </h6>
    <p className="text-zinc-400 text-xs">Made by Miquy with 💔 and ☕.</p>
   </div>
  </footer>
 );
}
