"use client";

import { Card } from "../partials/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import { constantIcons } from "../../utils/constant-icons";

export default function TechStack() {
 return (
  <div className="mt-6 lg:mt-0 bg-zinc-900 bg-opacity-40 rounded-xl shadow-xl p-6 flex flex-col space-y-4 xl:col-span-1 xl:row-span-2 overflow-hidden">
   <h3 className="text-md md:text-lg text-center font-bold text-zinc-100">
    Technology Use
   </h3>
   <div className="w-full flex justify-center items-center">
    <div className=" relative max-w-fit flex flex-col items-center">
     {!!constantIcons.length && (
      <Tabs
       aria-label="Options"
       variant="bordered"
       className="flex justify-center font-semibold duration-700"
      >
       {constantIcons.map((tech, index) => (
        <Tab
         key={index}
         title={tech.category}
         style={
          window.innerWidth < 768 ? { fontSize: "8px" } : { fontSize: "14px" }
         }
        >
         <Card key={index} classname={"py-6 px-10 duration-700 max-w-md"}>
          <div key={index} className="block justify-center space-y-2 mb-8 py-2">
           <h1 className="text-sm md:text-lg font-semibold text-center text-zinc-300">
            {tech.description}
           </h1>
           <div className="w-28 h-2 mx-auto rounded-md bg-zinc-300" />
          </div>
          <div
           className={`grid grid-cols-4 md:grid-cols-5 ${
            tech.items.length > 9 ? "xl:grid-cols-4" : "xl:grid-cols-3"
           } gap-4 md:gap-12`}
          >
           {tech.items.map((item, index) => (
            <div
             key={index}
             className="flex flex-col justify-center items-center gap-1"
            >
             <span className="flex justify-center w-7 h-7 md:w-13 md:h-13">
              {item.icon}
             </span>
             <p className="text-zinc-400 text-[8px] sm:text-xs font-semibold">
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
   </div>
  </div>
 );
}
