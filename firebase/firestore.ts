import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import auth, { currentUserUid } from "./auth";

export const db = getFirestore(app);

export const usersDB = collection(db, "usersDB");

export const AddUser = async (
  email: string,
  username: string,
  userUID: string
) => {
  try {
    const docRef = await setDoc(doc(db, "usersDB", userUID), {
      username: username,
      email: email,
      userUID: currentUserUid,
    });
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const currentUserDoc = async (userUID: string) => {
  const docRef = doc(db, "usersDB", userUID);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  return docSnap;
};

export default db;
