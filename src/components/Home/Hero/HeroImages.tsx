import React from "react";
import Image from "next/image";

import wits from "@/../public/Images/wits.png";

function HeroImages() {
  return (
    <div className="relative top-16 md:top-20 xl:top-40">
      <Image
        src={wits}
        alt="Wits university"
        className="rounded-xl w-full xl:hidden"
      />
      <Image
        src={wits}
        alt="Wits university"
        className="hidden rounded-3xl max-w-4xl xl:block"
      />
    </div>
  );
}

export default HeroImages;
