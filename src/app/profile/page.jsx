import React from "react";
import ProfileData from "../../components/profile-data";

export default function ProfilePage({ promise }) {
 return (
  <div className="relative w-full min-h-screen pb-16 px-16">
   <div className="flex justify-center px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.4fr] lg:grid-cols-[1fr_0.7fr] gap-4 space-y-6 space-x-4 md:space-y-2 md:space-x-12 items-center">
     <ProfileData promise={promise} />
    </div>
   </div>
  </div>
 );
}
