import React from "react";
import Link from "next/link";

function HeroButtons() {
  return (
    <div className="flex space-x-4 mt-8">
     <Link href={"/register"} className="px-4 py-1.5 rounded-lg font-bold bg-btn-brown text-primary hover:bg-medium-brown transition duration-200 ease-soft-spring">
        Sign Up
      </Link>
      <Link href={"/login"} className="px-4 border border-primary py-1 rounded-lg text-primary hover:bg-primary hover:text-dark-brown transition duration-200 ease-soft-spring">
        Login
      </Link>
    </div>
  );
}

export default HeroButtons;
