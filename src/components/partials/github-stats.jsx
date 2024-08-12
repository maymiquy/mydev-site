import GitHubCalendar from "react-github-calendar";
import { Card } from "../ui/card";

export default function GithubStats() {
 return (
  <div className="bg-zinc-900 bg-opacity-40 rounded-xl shadow-md p-6 xl:col-span-3 xl:row-span-1">
   <h3 className="text-md md:text-lg font-bold text-zinc-100">Github Stats</h3>
   <Card className="py-6 px-10 duration-700">
    <div className="flex items-center justify-center font-mono py-4 px-6 text-zinc-400">
     <GitHubCalendar
      username="maymiquy"
      labels={{
       totalCount: "{{count}} contributions in this year",
      }}
      colorScheme={"dark"}
      showWeekdayLabels
      weekStart={1}
     />
    </div>
   </Card>
  </div>
 );
}
