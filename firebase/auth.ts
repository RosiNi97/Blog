import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  User,
} from "firebase/auth";
import app from "./firebaseConfig";
import { FirebaseError } from "firebase/app";

const auth = getAuth(app);

export const user = auth.currentUser as User;

export const currentUserUid: string = auth.currentUser?.uid as string;

export const userLoggedIn: () => void | boolean = onAuthStateChanged(
  auth,
  (user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  }
);

export const registerWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    alert(err.message);
  }
};

export const loginEmailPass = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    alert(err.message);
  }
};

export default auth;
