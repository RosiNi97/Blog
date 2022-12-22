import {
  addDoc,
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
  const videoID = () => {
    if (videoURL.indexOf("&ab_channel=") !== -1) {
      return videoURL.substring(
        videoURL.indexOf("=") + 1,
        videoURL.indexOf("&ab_channel=")
      );
      // return videoID;
    } else {
      return videoURL.substring(videoURL.indexOf("?v=") + 3);
    }
  };
  const docRef = collection(db, "blogs");

  try {
    await addDoc(docRef, {
      title: title,
      contents: contents,
      id: userUID,
      videoID: videoID(),
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
