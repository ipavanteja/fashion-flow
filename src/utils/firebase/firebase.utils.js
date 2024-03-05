import { logDOM } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVHwzF2392vSzjFeYEvfeH2WOItmFiW-U",
  authDomain: "fashion-flow-db.firebaseapp.com",
  projectId: "fashion-flow-db",
  storageBucket: "fashion-flow-db.appspot.com",
  messagingSenderId: "646447297961",
  appId: "1:646447297961:web:1d932b648d95920eb080b8",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`error creating the user`, error.message);
    }
  }

  return userDocRef;
};
