import RegisterForm from "@/components/Register/RegisterForm";
import RegisterHeroImage from "@/components/Register/RegisterHeroImage";
import React from "react";

function Register() {
  return (
    <section className="max-w-maximum p-4">
      <main className="mx-auto relative flex justify-around items-center">
        <RegisterHeroImage />
        <RegisterForm />
      </main>
    </section>
  );
}

export default Register;
