import { getFirestore } from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const AddUser = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const db = getFirestore(app);
