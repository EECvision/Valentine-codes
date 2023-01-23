// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
