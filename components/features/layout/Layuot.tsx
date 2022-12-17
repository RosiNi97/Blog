import { onAuthStateChanged } from "firebase/auth";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useState, createContext, useEffect } from "react";
import auth from "../../../firebase/auth";
import db, {
  currentUserArticles,
  currentUserDoc,
} from "../../../firebase/firestore";
import Navbar from "../navbar/Navbar";
import UserContext, { UserContextProvider } from "../context/UserContext";
import { useContext } from "react";

// export const UserContext = createContext({
//   userState: false,
//   username: "",
//   articleList: [{}],
// });

const Layout = ({ children }: any) => {
  const { GetUserState, GetArticleList } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        GetUserState(true);
        const articleRef = doc(db, "articles", auth.currentUser?.uid as string);
        onSnapshot(articleRef, (doc) => {
          if (doc !== undefined) {
            const docData = doc.data();
            GetArticleList(docData?.articles);
          }
        });
      } else {
        GetUserState(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUserState(true);
  //       currentUserDoc(auth.currentUser?.uid as string).then((data) => {
  //         setUsername(data?.username as string);
  //       });
  //       const articleRef = doc(db, "articles", auth.currentUser?.uid as string);
  //       onSnapshot(articleRef, (doc) => {
  //         if (doc !== undefined) {
  //           const docData = doc.data();
  //           setArticleList(docData?.articles as Array<object>);
  //         }
  //       });
  //     } else {
  //       setUserState(false);
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
