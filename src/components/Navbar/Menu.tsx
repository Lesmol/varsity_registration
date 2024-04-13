import React from "react";

function Menu() {
  return (
    <div className="absolute top-12 right-0 p-4 w-96 rounded bg-btn-dark-brown">
      <h1 className="text-2xl">Top institutions</h1>
      <hr className="mb-4 mt-2"/>
      <a href="#" className="block">Eduvos</a>
      <a href="#" className="block">CTU</a>
      <a href="#" className="block">Varsity College</a>
      <a href="#" className="block">University of Pretoria</a>
      <a href="#" className="block">Belgium Campus</a>
    </div>
  );
}

export default Menu;
