import React from "react";
import Navbar from "../Navbar/NavBar";
import HeroText from "./Hero/HeroText";
import HeroImages from "./Hero/HeroImages";

function HeroSection() {
  return (
    <section className="bg-dark-brown">
      <main className="flex-col max-w-maximum mx-auto items-center justify-between px-8 py-4">
        <Navbar />
        <div className="mt-14 items-center justify-around md:flex md:space-x-12">
          <HeroText />
          <HeroImages />
        </div>
      </main>
    </section>
  );
}

export default HeroSection;
