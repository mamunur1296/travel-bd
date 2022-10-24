import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [navLocation, satNavLocation] = useState({});
  const [homeData, setHomeData] = useState({});
  const [user, setUser] = useState({});

  const regester = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unCescrib = onAuthStateChanged(auth, (loginUser) => {
      setUser(loginUser);
    });
    return () => unCescrib();
  }, []);
  const value = {
    navLocation,
    satNavLocation,
    homeData,
    setHomeData,
    regester,
    login,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
