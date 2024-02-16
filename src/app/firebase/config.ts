// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "varsity-registration-auth.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCK,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

//* We apply a workaround for Sever Side rendering
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
