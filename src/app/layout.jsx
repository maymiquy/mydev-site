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
  default: ["Miqdam Hambali | Portfolio"].join(""),
  template: data.displayName + "'s portfolio",
 },
 description:
  "Welcome to my portfolio site, I'm Miqdam Hambali a full-stack developer.",
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
 icons: [
  {
   url: "/favicon.ico",
   rel: "icon",
   sizes: "any",
   type: "image/svg+xml",
  },
 ],
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
