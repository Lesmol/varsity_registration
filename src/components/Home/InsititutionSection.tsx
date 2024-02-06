"use client";
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
    <div className="text-[#EBBCAD] bg-white mt-24 md:mt-56 py-6">
      <div className="text-center">Our top institutions to apply to</div>
      <div className="flex flex-wrap justify-center items-center mx-auto">
        {/* The last Image will be hidden in displays sizes under 640px */}
        {imageList.map((item, index) => (
          <Image
            src={item.src}
            alt={item.alt}
            className={`w-[100px] mx-10 object-scale-down md:w-[140px] ${
              index === imageList.length - 1 ? "hidden sm:block" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default InsititutionSection;
