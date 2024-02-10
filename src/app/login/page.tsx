"use client";
import React from "react";
import HeroImage from "@/components/Login/HeroImage";
import LoginForm from "@/components/Login/LoginForm";
import { motion } from "framer-motion";

function Login() {
  return (
    <section className="max-w-maximum p-4">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="mx-auto relative flex justify-around items-center"
      >
        <HeroImage />
        <LoginForm />
      </motion.main>
    </section>
  );
}

export default Login;
