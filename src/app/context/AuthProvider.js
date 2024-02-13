"use client";
import AuthContext from "./auth-context";

function AuthProvider(props) {
  const context = {
    user: "Lesedi",
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
