"use client";
import { UserAuth } from "@/app/context/AuthProvider";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth } from "@/app/firebase/config";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

function RegisterForm() {
  const user = UserAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function emailInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredEmail(event.target.value);
  }

  function passwordInputChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEnteredPassword(event.target.value);
  }

  function confirmPasswordInputChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setConfirmPassword(event.target.value);
  }

  //* Sign In and Log out Hanlders
  // TODO: The google sign in functionality works, but when I log out it doesn't refresh the page.
  // TODO: I need to get it to refresh the page when I click the log out btn.
  //! I need to remove this logic from the Login page
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function googleSignInHandler() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOutHandler() {
    signOut(auth);
    setCurrentUser(null);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      }
      return () => unsubscribe();
    });
  }, [currentUser]);

  return (
    <div className="text-dark-brown w-[460px]">
      <h1 className="font-serif text-6xl font-bold text-center">Hello there</h1>
      <p className="text-center font-light">
        Enter your name, email and password. {user?.displayName}
      </p>
      <form action="submit" className="flex flex-col mt-14">
        <label htmlFor="email" className="text-dark-brown text-lg mt-6">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={emailInputChangeHandler}
          required
          className="px-4 py-3 mt-2 rounded-xl placeholder-input-brown text-input-brown bg-input-brown"
        />
        <label htmlFor="password" className="text-dark-brown text-lg mt-6">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          onChange={passwordInputChangeHandler}
          required
          className="px-4 py-3 mt-2 rounded-xl placeholder-input-brown text-input-brown bg-input-brown"
        />
        <label
          htmlFor="confirmPassword"
          className="text-dark-brown text-lg mt-6"
        >
          Confirm password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="Confirm your password"
          onChange={confirmPasswordInputChangeHandler}
          required
          className="px-4 py-3 mt-2 rounded-xl placeholder-input-brown text-input-brown bg-input-brown"
        />
        <label htmlFor="showPassword" className="text-end mt-2">
          <input
            type="checkbox"
            id="showPassword"
            onClick={togglePasswordVisibility}
            className="mr-2"
          />
          Show Password
        </label>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-xl mt-16 bg-btn-dark-brown text-primary hover:bg-medium-brown transition 150s ease-in-out"
        >
          Register
        </button>
      </form>
      <button
        onClick={googleSignInHandler}
        className="px-4 py-2 rounded-lg w-full text-xl mt-6 bg-primary border border-black text-btn-dark-brown hover:bg-btn-brown transition 150s ease-in-out"
      >
        <div className="items-center justify-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#1D0C07"
            className="bi bi-google mr-1 hover:bg-brown"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
          Continue with Google
        </div>
      </button>
      <button
        onClick={logOutHandler}
        className="px-4 py-2 rounded-lg w-full text-xl mt-6 bg-primary border border-black text-btn-dark-brown hover:bg-btn-brown transition 150s ease-in-out"
      >
        <div className="items-center justify-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#1D0C07"
            className="bi bi-google mr-1 hover:bg-brown"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
          Log Out
        </div>
      </button>

      <p className="text-center mt-6">
        Already have an account?{" "}
        <Link href={"/login"} className="font-bold">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
