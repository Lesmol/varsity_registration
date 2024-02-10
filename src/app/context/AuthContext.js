import { useContext, createContext, useState, useEffect } from "react";

//TODO: Fix the warning you see when you run

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState("Lesedi");

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
