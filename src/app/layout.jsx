import "../styles/global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import data from "../lib/data.json";
import NextUIProviders from "./providers";
import React, { Suspense } from "react";
import { Loading } from "../components/ui/loading";
import NextTopLoader from "nextjs-toploader";

const username = process.env.GITHUB_USERNAME || data.githubUsername;

/** @type {import('next').Metadata} */
export const metadata = {
 title: {
  default: "maymiquy.dev",
  template: username + "'s portfolio",
 },
 description:
  "Welcome to my portfolio site, I'm Miqdam Hambali an full-stack developer.",
 openGrahph: {
  title: "Miqdam Hambali" + " | " + "Portfolio",
  description:
   "Welcome to my portfolio site, I'm Miqdam Hambali an full-stack developer",
  url: "https://mydev-portfolio.vercel.app",
  siteName: "maymiquy.dev",
  locale: "en-US",
  type: "webiste",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
 icons: {
  shortcut: "/maymiquy.png",
 },
};
const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

const calSans = LocalFont({
 src: "../../public/fonts/CalSans-SemiBold.ttf",
 variable: "--font-calsans",
});

export default function RootLayout({ children }) {
 return (
  <html lang="en" className={[calSans.variable, inter.variable].join(" ")}>
   <body
    className={`bg-black ${
     process.env.NODE_ENV === "development" ? "debug-screens" : ""
    }`}
   >
    <NextUIProviders>
     <NextTopLoader
      color="#ffff"
      initialPosition={0.08}
      crawlSpeed={50}
      height={5}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={50}
      shadow="0 0 10px #ffff,0 0 5px #ffff"
     />
     <Analytics />
     <Suspense fallback={<Loading />}>{children}</Suspense>
    </NextUIProviders>
   </body>
  </html>
 );
}
