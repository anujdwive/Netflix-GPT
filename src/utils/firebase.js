// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMPNzt-Fk3iv_CwyJgMWeJBltm5INOSwY",
  authDomain: "netflixgpt-6b34c.firebaseapp.com",
  projectId: "netflixgpt-6b34c",
  storageBucket: "netflixgpt-6b34c.appspot.com",
  messagingSenderId: "724391632906",
  appId: "1:724391632906:web:45e98bc6ca7747e1fe3ff3",
  measurementId: "G-TB5SYL5BEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();