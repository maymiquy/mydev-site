"use client";
import React from "react";
import NextTopLoader from "nextjs-toploader";

export default function ProgressBar() {
 return <NextTopLoader color="#ffff" initialPosition={0.08} crawlSpeed={50} height={5} crawl={true} showSpinner={true} easing="ease" speed={50} shadow="0 0 10px #ffff,0 0 5px #ffff" />;
}
