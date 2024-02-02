import React from "react";
import Navbar from "../Navbar/NavBar";
import HeroText from "../Hero/HeroText";
import HeroImages from "../Hero/HeroImages";

function HeroSection() {
  return (
    <main className="bg-dark-brown flex-col items-center justify-between px-8 py-4">
      <Navbar />
      <div className="flex items-center justify-around">
        <HeroText />
        <HeroImages />
      </div>
    </main>
  );
}

export default HeroSection;
