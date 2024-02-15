"use client";
import AuthContext from "./auth-context";
import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider(props: Props) {
  const [user, setUser] = useState({ user: "" });

  function googleSignInHandler() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOutHandler() {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // TODO: I have a type error here.
      // TODO: currentUser is a User object, so I need to make the user map accept the User object in order for it to work properly
      setUser({ user: currentUser });
      return () => unsubscribe();
    });
  }, [user]);

  return (
    // TODO: I have another problem that I don't understand yet
    <AuthContext.Provider value={{ user, googleSignInHandler, logOutHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
