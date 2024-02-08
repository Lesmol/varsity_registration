import React from "react";

type Props = {
  size: number;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
};

function Ellipse(props: Props) {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        top: props.top,
        bottom: props.bottom,
        right: props.right,
        left: props.left,
      }}
      className="hidden absolute rounded-full bg-medium-dark-brown shadow-custom sm:block"
    ></div>
  );
}

export default Ellipse;
