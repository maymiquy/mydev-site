import React from "react";
import { BounceOnload } from "./animation";
import Image from "next/image";

const ImageProfile = async ({ promise }) => {
 await new Promise((resolve) => setTimeout(resolve, 500));
 const user = await promise;

 return (
  <BounceOnload>
   <Image
    alt="image"
    width={150}
    height={150}
    src={user.avatar_url || data.avatarUrl}
    className="rounded-full w-52 h-52 md:w-40 md:h-40 mb-4 md:mb-12"
   />
  </BounceOnload>
 );
};

export default ImageProfile;
