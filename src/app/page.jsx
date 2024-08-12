import React from "react";
import WelcomeSection from "../components/partials/welcome-section";
import WelcomeNavigation from "../components/partials/welcome-nav";

export default function Home({ searchParams: { customUsername } }) {
 return (
  <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/30 to-black">
   <WelcomeNavigation />
   <WelcomeSection username={customUsername} />
  </main>
 );
}
