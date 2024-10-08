import { getUser } from "../api/data-services";
import data from "../../utils/data.json";
import TechStack from "../../components/partials/tech-stack";
import GithubStats from "../../components/partials/github-stats";
import WorkExperience from "../../components/partials/work-experience";
import PersonalInfo from "../../components/partials/personal-info";

export default function ProfilePage({ searchParams: { customUsername } }) {
 const username =
  customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
 const user = getUser(username);

 return (
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mx-auto w-full justify-center items-center">
   <PersonalInfo promise={user} />
   <TechStack />
   <WorkExperience />
   <GithubStats />
  </div>
 );
}
