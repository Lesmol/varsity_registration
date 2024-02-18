import React from "react";
import HeroButtons from "./HeroButtons";

function HeroText() {
  return (
    <div className="lg:max-w-sm">
      <h1 className="text-3xl md:text-5xl">Let's explore your future.</h1>
      <p className="text-sm mt-2">
        A single interface to guide you through your tertiary application
        journey
      </p>
      <HeroButtons />
    </div>
  );
}

export default HeroText;
