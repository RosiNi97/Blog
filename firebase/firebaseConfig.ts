// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoRsl28OjpsrkK1iXg0qWg_iEv7UefuCM",
  authDomain: "blog-training-app.firebaseapp.com",
  projectId: "blog-training-app",
  storageBucket: "blog-training-app.appspot.com",
  messagingSenderId: "655568340404",
  appId: "1:655568340404:web:9c23bbda3a6e91f6555ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;