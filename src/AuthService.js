import React, { useState, useEffect } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

//provider=>コンテキストで渡したい値を指定しるもの
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
