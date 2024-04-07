"use client";
import React from "react";
import HeroImage from "@/components/Login/HeroImage";
import LoginForm from "@/components/Login/LoginForm";

function Login() {
  return (
    <section className="max-w-maximum p-4">
      <main className="mx-auto relative flex justify-around items-center">
        <HeroImage />
        <LoginForm />
      </main>
    </section>
  );
}

export default Login;
