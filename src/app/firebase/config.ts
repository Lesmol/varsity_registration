import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
//! authDomain doesn't accept the value from the .env.local file
// TODO: I need to find out if I can fix that
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "varsity-registration-aut-717d4.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCK,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//* We apply a workaround for Sever Side rendering
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
