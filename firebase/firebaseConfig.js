// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk7q1LM-jMdJzGSewgsNIDTBtRMOR6K14",
  authDomain: "finance-budgeting-app.firebaseapp.com",
  projectId: "finance-budgeting-app",
  storageBucket: "finance-budgeting-app.appspot.com",
  messagingSenderId: "607103632060",
  appId: "1:607103632060:web:a91472a282c5fd050906b9",
  measurementId: "G-52LJFJR0N8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// export the functions
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
  limit,
  db,
  auth,
};
