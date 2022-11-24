import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

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

export default auth;
