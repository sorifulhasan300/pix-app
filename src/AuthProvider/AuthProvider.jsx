import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const name = "soriful hasan";
  const provider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (updateInfo) => {
    console.log(updateInfo);
    return updateProfile(auth.currentUser, updateInfo);
  };
  const userData = {
    registerUser,
    loginUser,
    googleSignIn,
    user,
    logOut,
    loading,
    updateUserProfile,
    setUser,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user);
    });
    return () => unSubscribe();
  }, [auth]);
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
