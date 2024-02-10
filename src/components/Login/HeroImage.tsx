import React from "react";

function HeroImage() {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-cover bg-no-repeat bg-login-pattern w-2/5 min-w-[440px] max-w-[640px] aspect-3/4  rounded-3xl p-6 pb-16">
      <div className="flex items-center">
      <h1 className="text-7xl font-serif">VR</h1>
      <div className="w-[160px] h-[5px] rounded-full ml-8 bg-primary"></div>
      </div>
      <div>
        <h1 className="text-7xl font-serif">Consistency</h1>
        <p>Stay in the know of your progress.</p>
      </div>
    </div>
  );
}

export default HeroImage;
