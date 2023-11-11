import ProfileData from "../../components/profile-data";
import { getUser } from "../api/data-services";
import data from "../../lib/data.json";

export default function ProfilePage({ searchParams: { customUsername } }) {
 const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 const promise = getUser(username);

 return (
  <div className="relative w-full min-h-screen">
   <div className="flex justify-center px-6 pt-44 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.4fr] lg:grid-cols-[1fr_0.7fr] gap-4 space-y-6 md:space-y-2 md:space-x-12 items-center">
     <ProfileData promise={promise} />
    </div>
   </div>
  </div>
 );
}
