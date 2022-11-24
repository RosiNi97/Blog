import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoRsl28OjpsrkK1iXg0qWg_iEv7UefuCM",
  authDomain: "blog-training-app.firebaseapp.com",
  projectId: "blog-training-app",
  storageBucket: "blog-training-app.appspot.com",
  messagingSenderId: "655568340404",
  appId: "1:655568340404:web:9c23bbda3a6e91f6555ee1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
