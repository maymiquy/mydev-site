"use client";

import { Card } from "./ui/card";
import data from "../lib/data.json";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";

export default function TechStack() {
 const dependencies = data.techStack;

 return (
  <div className="flex flex-col gap-8 items-center">
   <Tabs aria-label="Options" variant="bordered" className="flex justify-center">
    <Tab key="language" title="Language">
     <Card classname={"p-6"}>
      <p className="text-xl text-zinc-300">{dependencies.language.join(", ")}</p>
     </Card>
    </Tab>
    <Tab key="frontend" title="Front-end">
     <Card classname={"p-6"}>
      <p className="text-xl text-zinc-300">{dependencies.frontEnd.join(", ")}</p>
     </Card>
    </Tab>
   </Tabs>
  </div>
 );
}
