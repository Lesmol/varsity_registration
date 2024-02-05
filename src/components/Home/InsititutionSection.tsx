'use client'
import React from "react";
import Image from "next/image";

import eduvos from "@/../public/Images/eduvos_logo.png";
import ctu from "@/../public/Images/ctu_logo.jpg";
import varsity_college from "@/../public/Images/varsity_college_logo.png";
import belgium_campus from "@/../public/Images/belgium_campus_logo.png";
import wits from "@/../public/Images/wits_logo.png";

function InsititutionSection() {
  const imageList = [
    {
      src: eduvos,
      alt: "Eduvos Logo",
    },
    {
      src: ctu,
      alt: "CTU Logo",
    },
    {
      src: varsity_college,
      alt: "Varsity College Logo",
    },
    {
      src: belgium_campus,
      alt: "Belgium Campus Logo",
    },
    {
      src: wits,
      alt: "University of Witwatersrand Logo",
    },
  ];

  return (
    <div className="text-[#EBBCAD] bg-white mt-56 py-6">
      <div className="text-center">Our top institutions to apply to</div>
      <div className="grid grid-flow-col xl:flex xl:space-x-20 justify-center items-center mx-auto">
        {imageList.map((item) => (
          <Image src={item.src} alt={item.alt} className="w-[80px] object-scale-down md:w-[180px]"/>
        ))}
      </div>
    </div>
  );
}

export default InsititutionSection;
