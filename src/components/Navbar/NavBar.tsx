"use client";

import React, { useState } from "react";
import Image from "next/image";

import logo from "../../../public/SVG/logo.svg";
import Menu from "./Menu";

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  function onDisplayMenu() {
    setDisplayMenu(!displayMenu);
    //TODO: Comment out
    console.log(displayMenu);
  }

  return (
    <div className="relative flex space-x-8 justify-between items-center md:justify-around">
      <Image src={logo} alt="VR logo" width={50} height={50} />
      {/* Search bar */}
      <form className="hidden w-full max-w-[500px] md:block">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#8C7E54"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-[40px] p-4 ps-10 bg-lighter-primary text-sm text-search border rounded-xl focus:ring-dark-brown focus:border-dark-brown placeholder-search"
            placeholder="Search for an institution..."
          />
          <button
            type="submit"
            className="text-primary absolute end-0.5 bottom-0.5 bg-brown hover:bg-medium-brown focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 transition ease-soft-spring"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-center space-x-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="#F3F1EB"
          className="bi bi-search md:hidden"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <button onClick={onDisplayMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#F3F1EB"
            className="bi bi-grid"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
          </svg>
        </button>
      </div>
      {displayMenu && <Menu />}
    </div>
  );
}

export default Navbar;
