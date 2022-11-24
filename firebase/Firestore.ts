import { getFirestore } from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { User } from "firebase/auth";

export const db = getFirestore(app);

export const AddUser = async (email: string, userID: any) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      userID: userID,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
