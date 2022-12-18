import app from "./firebaseConfig";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { User } from "firebase/auth";
export const db = getFirestore(app);

export const AddUser = async (email: string, userID: string) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      userUID: userID,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getBlogCollections = async () => {
  return await getDocs(collection(db, "blogs"));
};
