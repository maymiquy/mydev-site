import Link from "next/link";
import { EyeClosedIcon, EyeIcon, StarIcon } from "@primer/octicons-react";
import { VercelInfo } from "./vercel-info";
import {
 getTrafficPageViews,
 getDependabotAlerts,
} from "../app/api/data-services";
import { SiGithub, SiDependabot } from "@icons-pack/react-simple-icons";

export const Article = async ({ project }) => {
 const appLink = project.homepage ? project.homepage : project.html_url;

 //  Repository visitors info.
 let views = (
  <span title="Can't get traffic data for someone else's repo.">
   <EyeClosedIcon className="w-4 h-4" />
  </span>
 );
 let alerts = (
  <span title="Can't get alerts data for someone else's repo.">
   <SiDependabot className="w-4 h-4" />
  </span>
 );
 const isGitHubUser = process.env.GITHUB_USERNAME === project.owner.login;
 if (isGitHubUser) {
  const [{ todayUniques, sumUniques } = {}, openAlertsBySeverity] =
   await Promise.all([
    getTrafficPageViews(project.owner.login, project.name),
    getDependabotAlerts(project.owner.login, project.name),
   ]);
  views = (
   <span title="Unique repository visitors: Last 14 days / Today.">
    <EyeIcon className="w-4 h-4" />{" "}
    {Intl.NumberFormat("en-US", { notation: "compact" }).format(sumUniques)}/
    {Intl.NumberFormat("en-US", { notation: "compact" }).format(todayUniques)}
   </span>
  );

  const alertColor =
   openAlertsBySeverity.critical > 0
    ? "red"
    : openAlertsBySeverity.high > 0
    ? "orange"
    : openAlertsBySeverity.medium > 0
    ? "yellow"
    : openAlertsBySeverity.low > 0
    ? "blue"
    : "gray";
  const alertCountTotal =
   (openAlertsBySeverity.critical || 0) +
   (openAlertsBySeverity.high || 0) +
   (openAlertsBySeverity.medium || 0) +
   (openAlertsBySeverity.low || 0);
  const alertTitle =
   alertCountTotal > 0
    ? `Open Dependabot alerts: ` + JSON.stringify(openAlertsBySeverity)
    : "No open Dependabot alerts.";

  alerts = (
   <span title={alertTitle}>
    <SiDependabot className="w-4 h-4 danger" fill={alertColor} />{" "}
    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
     alertCountTotal,
    )}
   </span>
  );
 }

 return (
  <article className="p-4 md:p-8">
   <div className="flex justify-between gap-2 items-center">
    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
     <time dateTime={new Date(project.created_at).toISOString()}>
      {new Date(project.created_at).toISOString().substring(0, 10)}
     </time>
    </span>
    <span className="text-zinc-500 text-xs flex items-center gap-1 ">
     {project.vercel && (
      <VercelInfo info={{ ...project.vercel, owner: project.owner }} />
     )}
     <span title="Total stars." className="items-center">
      <StarIcon className="w-4 h-4" />{" "}
      {Intl.NumberFormat("en-US", { notation: "compact" }).format(
       project.stargazers_count,
      )}
     </span>
    </span>
   </div>

   <Link href={appLink} legacyBehavior>
    <h2
     className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer"
     title={`Click to view the ${project.homepage ? "app" : "repo"}.`}
    >
     <span className="bg-gradient-to-r from-zinc-100 to-zinc-300 hover:from-zinc-500 hover:to-zinc-700 text-transparent bg-clip-text">
      {project.name}
     </span>
    </h2>
   </Link>
   <p className="z-20 mt-4 text-sm font-sans duration-1000 text-zinc-400 group-hover:text-zinc-200">
    {project.description}
   </p>
   <div className="flex flex-row justify-between gap-2 p-1 float-left my-2 border-t-2 border-gray-700 border-opacity-50">
    <span className="text-zinc-500 text-xs">{alerts}</span>
    <span className="text-zinc-500 text-xs">{views}</span>
   </div>
   <div className="flex justify-between gap-2 p-1 float-right my-2 border-t-2 border-gray-700 border-opacity-50">
    <span
     className="text-zinc-500 text-xs align-middle flex items-center gap-1"
     title="GitHub repository link."
    >
     <SiGithub className="w-4 h-4" />
     <Link href={project.html_url} className="hover:text-zinc-700">
      {project.name}
     </Link>
    </span>
   </div>
  </article>
 );
};
