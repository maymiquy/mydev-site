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
const displayName = process.env.GITHUB_NAME || data.displayName;

/** @type {import('next').Metadata} */
export const metadata = {
 title: {
  default: "Miqdam Hambali | Portfolio",
  template: username + "'s portfolio",
 },
 description:
  "Welcome to my portfolio site, I'm Miqdam Hambali an full-stack developer.",
 keywords: [
  "Miqdam Hambali",
  "Miqdam",
  "portfolio",
  "website portfolio",
  "Miqdam Hambali - Portfolio",
  "Miqdam Portfolio",
 ],
 openGraph: {
  title: "Miqdam Hambali | Portfolio",
  description:
   "Welcome to my portfolio site, I'm Miqdam Hambali an full-stack developer",
  url: "https://miqdamhambali-portfolio.vercel.app",
  siteName: "Miqdam Hambali | Portfolio",
  locale: "en-US",
  type: "website",
  images: {
   url: "https://miqdamhambali-portfolio.vercel.app/og.png",
   width: 1920,
   height: 1080,
  },
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
  shortcut: "/icon.png",
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
   <head>
    <Analytics />
   </head>
   <body
    className={`bg-black font-display ${
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
     <Suspense fallback={<Loading />}>{children}</Suspense>
    </NextUIProviders>
   </body>
  </html>
 );
}
