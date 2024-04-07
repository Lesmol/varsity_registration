"use client";
import React from "react";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { AuthContextType, AuthContext } from "./auth-context";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider(props: Props) {
  const [user, setUser] = React.useState<User | null>(null);

  async function createWithEmail(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  async function signInWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw err;
    }
  }

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue: AuthContextType = {
    user,
    createWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signOut: handleSignOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
