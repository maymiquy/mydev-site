import "../styles/global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import data from "../lib/data.json";
import NextUIProviders from "./providers";
import ProgressBar from "../components/ui/progress-bar";

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
     <ProgressBar />
     <Analytics />
     {children}
    </NextUIProviders>
   </body>
  </html>
 );
}
