import React from "react";

import Ellipse from "./Ellipse";

type Props = {
  h1: string;
  p: string;
  A_MEDIUM_ellipse?: boolean;
  BIG_ellipse_top?: number;
  BIG_ellipse_bottom?: number;
  BIG_ellipse_right?: number;
  BIG_ellipse_left?: number;
  MEDIUM_ellipse_top?: number;
  MEDIUM_ellipse_bottom?: number;
  MEDIUM_ellipse_right?: number;
  MEDIUM_ellipse_left?: number;
  A_MEDIUM_ellipse_top?: number;
  A_MEDIUM_ellipse_bottom?: number;
  A_MEDIUM_ellipse_right?: number;
  A_MEDIUM_ellipse_left?: number;
  SMALL_ellipse_top?: number;
  SMALL_ellipse_bottom?: number;
  SMALL_ellipse_right?: number;
  SMALL_ellipse_left?: number;
};

function Card(props: Props) {
  return (
    <div className="relative my-6 overflow-clip flex flex-col justify-center h-[340px] px-2 w-[430px] mx-10 rounded-3xl shadow-3xl -z-10 shadow-brown">
      <h1 className="text-dark-brown text-5xl font-bold z-20">{props.h1}</h1>
      <p className="text-brown text-lg pt-2 z-20">{props.p}</p>
      <Ellipse
        size={100}
        top={props.BIG_ellipse_top}
        bottom={props.BIG_ellipse_bottom}
        right={props.BIG_ellipse_right}
        left={props.BIG_ellipse_left}
      />
      <Ellipse
        size={50}
        top={props.MEDIUM_ellipse_top}
        bottom={props.MEDIUM_ellipse_bottom}
        right={props.MEDIUM_ellipse_right}
        left={props.MEDIUM_ellipse_left}
      />
      {props.A_MEDIUM_ellipse && (
        <Ellipse
          size={50}
          top={props.A_MEDIUM_ellipse_top}
          bottom={props.A_MEDIUM_ellipse_bottom}
          right={props.A_MEDIUM_ellipse_right}
          left={props.A_MEDIUM_ellipse_left}
        />
      )}
      <Ellipse
        size={25}
        top={props.SMALL_ellipse_top}
        bottom={props.SMALL_ellipse_bottom}
        right={props.SMALL_ellipse_right}
        left={props.SMALL_ellipse_left}
      />
    </div>
  );
}

export default Card;
