"use client";

import { Card } from "../partials/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import { constantIcons } from "../../utils/constant-icons";

export default function TechStack() {
 return (
  <div className="flex flex-col gap-8 items-center">
   {!!constantIcons.length && (
    <Tabs
     aria-label="Options"
     variant="bordered"
     className="flex justify-center font-semibold duration-700"
    >
     {constantIcons.map((tech, index) => (
      <Tab key={index} title={tech.category}>
       <Card classname={"py-6 px-10 duration-700"}>
        <div className="block justify-center space-y-2 mb-8 py-2">
         <h1 className="text-sm md:text-lg font-semibold text-center text-zinc-300">
          {tech.description}
         </h1>
         <div className="w-28 h-2 mx-auto rounded-md bg-zinc-300" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
         {tech.items.map((item) => (
          <div
           key={item.name}
           className="flex flex-col justify-center items-center gap-1"
          >
           <span className="flex justify-center w-7 h-7 md:w-13 md:h-13">
            {item.icon}
           </span>
           <p className="text-zinc-400 text-[10px] sm:text-xs font-semibold">
            {item.name}
           </p>
          </div>
         ))}
        </div>
       </Card>
      </Tab>
     ))}
    </Tabs>
   )}
  </div>
 );
}
