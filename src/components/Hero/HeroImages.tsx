import React from "react";
import Image from "next/image";

import wits from "../../../public/Images/wits.png";

function HeroImages() {
  return (
    <div className="relative top-40">
      <Image src={wits} alt="Wits university" className="rounded-3xl max-w-4xl"/>
    </div>
  );
}

export default HeroImages;
