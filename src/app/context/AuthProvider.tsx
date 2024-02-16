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
import { User } from "firebase/auth";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider(props: Props) {
  const [user, setUser] = useState<User | null>(null);

  function googleSignInHandler() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOutHandler() {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      return () => unsubscribe();
    });
  }, [user]);

  return (
    // TODO: I have another problem that I don't understand yet
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
