import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk7q1LM-jMdJzGSewgsNIDTBtRMOR6K14",
  authDomain: "finance-budgeting-app.firebaseapp.com",
  projectId: "finance-budgeting-app",
  storageBucket: "finance-budgeting-app.appspot.com",
  messagingSenderId: "607103632060",
  appId: "1:607103632060:web:dbaaa60821a819330906b9",
  measurementId: "G-7XCECQVCDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;