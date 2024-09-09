import React, { useState, useEffect } from "react";
import firebase from "./config/firebase";

const AuthContext = React.createContext();

//provider=>コンテキストで渡したい値を指定しるもの
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
