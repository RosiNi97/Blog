import { getFirestore } from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


export const db = getFirestore(app);

export const AddUser = async (email: string, userID: string,username:string) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: username,
      email: email,
      userUID: userID,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
