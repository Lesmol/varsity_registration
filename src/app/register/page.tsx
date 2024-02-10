"use client";
import RegisterForm from "@/components/Register/RegisterForm";
import RegisterHeroImage from "@/components/Register/RegisterHeroImage";
import { motion } from "framer-motion";
import React from "react";

function Register() {
  return (
    <section className="max-w-maximum p-4">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="mx-auto relative flex justify-around items-center"
      >
        <RegisterHeroImage />
        <RegisterForm />
      </motion.main>
    </section>
  );
}

export default Register;
