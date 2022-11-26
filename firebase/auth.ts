import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const currentUser = auth.currentUser?.uid as string;

export const registerWithEmailPassword = async (
  username: string,
  password: string
) => {
  try {
    await createUserWithEmailAndPassword(auth, username, password);
  } catch (err) {
    alert(err);
  }
};

export const loginEmailPass = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

export default auth;
