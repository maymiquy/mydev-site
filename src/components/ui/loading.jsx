"use client";

import { Spinner } from "@nextui-org/spinner";

export function Loading() {
 return (
  <div className="w-full min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 flex justify-center items-center">
   <Spinner size="lg" color="default" />
  </div>
 );
}
