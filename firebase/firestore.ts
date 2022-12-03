import { getFirestore } from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { currentUserUid } from "./auth";

export const db = getFirestore(app);

export const usersDB = collection(db, "usersDB");

export const AddUser = async (email: string, username: string) => {
  try {
    const docRef = await addDoc(collection(db, "usersDB"), {
      username: username,
      email: email,
      userUID: currentUserUid,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export default db;
