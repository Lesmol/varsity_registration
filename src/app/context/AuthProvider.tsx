"use client";
import AuthContext from "./auth-context";
import { useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider(props: Props) {
  const [user, setUser] = useState({ user: "Lesedi" });

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
