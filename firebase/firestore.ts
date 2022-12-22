import {
  addDoc,
  arrayUnion,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

export const db = getFirestore(app);

export const usersDB = collection(db, "usersDB");

//User Doc Functions

export const AddUser = async (
  email: string,
  username: string,
  userUID: string
) => {
  try {
    const docRef = await setDoc(doc(db, "usersDB", userUID), {
      username: username,
      email: email,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getBlogCollections = async () => {
  return await getDocs(collection(db, "blogs"));
};

export const currentUserDoc = async (userUID: string | undefined) => {
  if (userUID !== undefined) {
    const userDataRef = doc(db, "usersDB", userUID);
    const userDataSnap = await getDoc(userDataRef);
    const userData = userDataSnap.data();

    return userDataSnap.data();
  } else return {};
};

//Blogs Doc functions

export const AddArticle = async (
  title: string,
  contents: string,
  userUID: string,
  username: string,
  videoURL: string
) => {
  const videoID: string = videoURL.substring(
    videoURL.indexOf("=") + 1,
    videoURL.indexOf("&ab_channel=")
  );
  const docRef = collection(db, "blogs");

  try {
    await addDoc(docRef, {
      title: title,
      contents: contents,
      Uid: userUID,
      videoID: videoID,
      username: username,
    }).then(async (document) => {
      await updateDoc(doc(db, "blogs", document.id), { docID: document.id });
    });
  } catch (err) {
    console.log(err);
  }
};
export const DeleteDoc = async (docID: string | undefined) => {
  if (docID) {
    await deleteDoc(doc(db, "blogs", docID));
  }
  // try {
  //   await
  // } catch (err) {
  //   alert(err);
  // }
};

export const currentUserArticles = async (userUID: string) => {
  if (userUID !== undefined) {
    const docRef = doc(db, "articles", userUID);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as DocumentData;
  }
  return {};
};

export default db;
