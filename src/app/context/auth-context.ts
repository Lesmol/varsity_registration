"use client";
import React, { createContext } from "react";
import { User } from "firebase/auth";

const AuthContext = createContext<User | null>(null);

export default AuthContext;
