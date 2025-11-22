import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // create account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get current user info
  onAuthStateChanged(auth, currentUser => {
    if (currentUser) {
      console.log("inside observer, if closure: ", currentUser);
      
    } else {
      console.log("inside observer, else closure: ", currentUser);
      
    }
  })

  const authInfo = {
    createUser,
    signInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
