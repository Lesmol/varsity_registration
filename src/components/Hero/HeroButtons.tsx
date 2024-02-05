import React from "react";

function HeroButtons() {
  return (
    <div className="flex space-x-4 mt-8">
     <button className=" px-4 py-1 rounded-lg font-bold bg-btn-brown text-primary hover:bg-medium-brown transition 15 ease-soft-spring">
        Sign Up
      </button>
      <button className="px-4 border border-primary py-1 rounded-lg text-primary hover:bg-primary hover:text-dark-brown transition 15 ease-soft-spring">
        Login
      </button>
    </div>
  );
}

export default HeroButtons;
