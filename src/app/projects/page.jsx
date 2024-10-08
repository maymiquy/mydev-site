import React from "react";
import { Card } from "../../components/ui/card";
import { Article } from "../../components/partials/article";
import chunk from "lodash/chunk";
import data from "../../utils/data.json";
import { RecentActivity } from "../../components/partials/recent-activity";
import {
 getRepos,
 getPinnedRepos,
 getVercelProjects,
} from "../api/data-services";

export default async function ProjectsPage({
 searchParams: { customUsername },
}) {
 const username =
  customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 const [repositories, pinnedNames, vercelProjects] = await Promise.all([
  getRepos(username),
  getPinnedRepos(username),
  getVercelProjects(),
 ]);

 const vercelProjectsDetails = vercelProjects.projects
  .filter((project) => {
   const githubRepo = repositories.find((repo) => repo.name === project.name);
   return githubRepo;
  })
  .map((project) => ({
   framework: project.framework,
   name: project.name,
   nodeVersion: project.nodeVersion,
   link: project.link,
   description: project.description,
  }));

 repositories.forEach((repo) => {
  const vercelRepo = vercelProjectsDetails.find(
   (vercelRepo) => vercelRepo.name === repo.name,
  );
  if (vercelRepo) {
   repo.vercel = vercelRepo;
  }
 });

 const heroes = repositories
  .filter((project) => pinnedNames.includes(project.name))
  .sort((a, b) => b.stargazers_count - a.stargazers_count);
 const sorted = repositories
  .filter((p) => !p.private)
  .filter((p) => !p.fork)
  .filter((p) => !p.archived)
  // .filter((p) => p.name !== username)
  .filter((p) => !pinnedNames.includes(p.name))
  .filter((p) => !data.projects.blacklist.includes(p.name))
  .sort(
   (a, b) =>
    new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
    new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime(),
  );

 const chunkSize = Math.ceil(sorted.length / 3);

 return (
  <div className="relative pt-12 pb-16 sm:pt-2 lg:pt-0">
   <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
    <div className="w-full mx-auto lg:mx-0">
     <h2 className="text-xl font-bold text-zinc-100 md:text-2xl lg:text-3xl">
      Projects
     </h2>
     <RecentActivity username={username} className={"mt-4"} />
     <div className="w-full h-px bg-zinc-800 mt-2" />
    </div>

    {heroes.length ? (
     <>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
       {heroes[0] || heroes[2] ? (
        <div className="grid grid-cols-1 gap-4">
         {[heroes[0], heroes[2]].map((project) =>
          !project ? null : (
           <Card key={project.name}>
            <Article project={project} />
           </Card>
          ),
         )}
        </div>
       ) : null}
       {heroes[1] || heroes[3] ? (
        <div className="grid grid-cols-1 gap-4">
         {[heroes[1], heroes[3]].map((project) =>
          !project ? null : (
           <Card key={project.name}>
            <Article project={project} />
           </Card>
          ),
         )}
        </div>
       ) : null}
      </div>
      <div className="hidden w-full h-px md:block bg-zinc-800" />
     </>
    ) : null}

    <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 lg:grid-cols-3">
     <div className="grid grid-cols-1 space-y-2 lg:space-x-2 gap-4">
      {chunk(sorted, chunkSize)[0]?.map((project) => (
       <Card key={project.name}>
        <Article project={project} />
       </Card>
      ))}
     </div>
     <div className="grid grid-cols-1 space-y-2 lg:space-x-2 gap-4">
      {chunk(sorted, chunkSize)[1]?.map((project) => (
       <Card key={project.name}>
        <Article project={project} />
       </Card>
      ))}
     </div>
     <div className="grid grid-cols-1 space-y-2 lg:space-x-2 gap-4">
      {chunk(sorted, chunkSize)[2]?.map((project) => (
       <Card key={project.name}>
        <Article project={project} />
       </Card>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}
