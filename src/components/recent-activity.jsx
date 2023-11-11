import { getRecentUserActivity } from "../app/api/data-services";

export const RecentActivity = async ({ username }) => {
 const recentUserActivity = await getRecentUserActivity(username);
 const activitySummary = recentUserActivity.reduce((acc, activity) => {
  if (activity.type === "PushEvent") {
   acc.commits = acc.commits || 0;
   acc.commits += activity.payload.size;
  } else if (activity.type === "PullRequestReviewEvent") {
   acc.reviews = acc.reviews || 0;
   acc.reviews++;
  } else if (activity.type === "IssueCommentEvent") {
   acc.commentsCreated = acc.commentsCreated || 0;
   acc.commentsCreated += activity.payload.action === "created" ? 1 : 0;
   acc.commentsEdited = acc.commentsEdited || 0;
   acc.commentsEdited += activity.payload.action === "edited" ? 1 : 0;
  } else if (activity.type === "PullRequestEvent") {
   acc.prsOpened = acc.prsOpened || 0;
   acc.prsOpened += activity.payload.action === "opened" ? 1 : 0;
   acc.prsMerged = acc.prsMerged || 0;
   acc.prsMerged += activity.payload.action === "closed" && activity.payload.pull_request.merged ? 1 : 0;
  } else if (activity.type === "CreateEvent") {
   if (activity.payload.ref_type === "tag") {
    acc.tags = acc.tags || 0;
    acc.tags++;
   } else {
    acc.branches = acc.branches || 0;
    acc.branches++;
   }
  }

  acc[activity.type] = acc[activity.type] || 0;
  acc[activity.type]++;

  return acc;
 }, {});

 const activitySummaryString = Object.keys(activitySummary)
  .map((key) => {
   const value = activitySummary[key];
   if (key === "commits" && value) {
    return `pushed ${value} commit${value === 1 ? "" : "s"}`;
   } else if (key === "reviews" && value) {
    return `reviewed ${value} PR${value === 1 ? "" : "s"}`;
   } else if (key === "prsOpened" && value) {
    return `opened ${value} PR${value === 1 ? "" : "s"}`;
   } else if (key === "prsMerged" && value) {
    return `merged ${value} PR${value === 1 ? "" : "s"}`;
   } else if (key === "commentsCreated" && value) {
    return `made ${value} comment${value === 1 ? "" : "s"}`;
   } else if (key === "branches" && value) {
    return `created ${value} branch${value === 1 ? "" : "es"}`;
   } else if (key === "tags" && value) {
    return `created ${value} tag${value === 1 ? "" : "s"}`;
   } else {
    return null;
   }
  })
  .filter(Boolean)
  .join(", ");

 return (
  <div>
   <span className="text-sm text-zinc-500">{activitySummaryString && "In last 30 days on GitHub  I " + activitySummaryString + " in public repositories."}</span>
  </div>
 );
};
