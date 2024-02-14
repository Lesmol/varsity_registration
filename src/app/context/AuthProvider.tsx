"use client";
import AuthContext from "./auth-context";

type Props = {
  children: React.ReactNode;
};

function AuthProvider(props: Props) {
  const context = {};

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
