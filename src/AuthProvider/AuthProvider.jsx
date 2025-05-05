import React, { createContext } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const name = "soriful hasan";

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userData = {
    registerUser,
    loginUser,
  };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
