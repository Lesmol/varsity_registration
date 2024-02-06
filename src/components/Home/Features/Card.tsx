import React from "react";
import Image from "next/image";

import small_ellipse from "@/../public/SVG/small_ellipse.svg";
import medium_ellipse from "@/../public/SVG/medium_ellipse.svg";
import big_ellipse from "@/../public/SVG/big_ellipse.svg";

type Props = {
  h1: string;
  p: string;
};

function Card(props: Props) {
  return (
    <div className="relative overflow-clip flex flex-col justify-center h-[260px] px-2 max-w-80 mx-10 rounded-3xl shadow-3xl -z-10 shadow-brown">
      <h1 className="text-dark-brown text-2xl font-bold z-20">{props.h1}</h1>
      <p className="text-brown z-20">{props.p}</p>
      <Image src={small_ellipse} alt="Small brown ellipse" className="absolute bottom-[190px] left-[-10px]" />
      <Image src={medium_ellipse} alt="Medium brown ellipse" className="absolute bottom-[10px] right-[50px]" />
      <Image src={big_ellipse} alt="Big brown ellipse" className="absolute top-[-40px] right-[-50px]" />
    </div>
  );
}

export default Card;
