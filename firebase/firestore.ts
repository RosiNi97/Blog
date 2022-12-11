import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import app from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import auth, { currentUserUid } from "./auth";

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

export const currentUserDoc = async (userUID: string) => {
  if (userUID !== undefined) {
    const userDataRef = doc(db, "usersDB", userUID);
    const userDataSnap = await getDoc(userDataRef);
    const userData = userDataSnap.data();

    const articleRef = doc(db, "articles", userUID);
    const articleSnap = await getDoc(articleRef);
    const articlesData = articleSnap.data();

    const data: { user: string; articles: any } = {
      user: userData?.username as string,
      articles: { articlesData },
    };
    return data;
  } else return {};
};

//Article Doc functions

export const AddArticle = async (
  title: string,
  contents: string,
  userUID: string,
  username: string
) => {
  const docRef = doc(db, "articles", userUID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    try {
      await updateDoc(doc(db, "articles", userUID), {
        articles: arrayUnion({ title: title, contents: contents, id: userUID }),
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      await setDoc(doc(db, "articles", userUID), {
        articles: [
          {
            title: title,
            contents: contents,
            id: "userUID + title",
          },
        ],
        author: username,
        authorUID: userUID,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const currentUserArticles = async (userUID: string) => {
  const docRef = doc(db, "articles", userUID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export default db;
