import React from "react";
import Navbar from "../Navbar/NavBar";
import HeroText from "../Hero/HeroText";
import HeroImages from "../Hero/HeroImages";

function HeroSection() {
  return (
    <main className="bg-dark-brown flex-col items-center justify-between px-8 py-4">
      <Navbar />
      <div className="mt-14 items-center justify-around md:flex md:space-x-12">
        <HeroText />
        <HeroImages />
      </div>
    </main>
  );
}

export default HeroSection;
