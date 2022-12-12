import { onAuthStateChanged } from "firebase/auth";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useState, createContext, useEffect } from "react";
import auth from "../../../firebase/auth";
import db, {
  currentUserArticles,
  currentUserDoc,
} from "../../../firebase/firestore";
import Navbar from "../navbar/Navbar";

export const UserContext = createContext({
  userState: false,
  username: "",
});

const Layout = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState<DocumentData>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(true);
      currentUserDoc(auth.currentUser?.uid as string).then((data) => {
        setUsername(data?.username as string);
      });
    } else {
      setUserState(false);
    }
  });

  // currentUserArticles(auth.currentUser?.uid as string).then((doc) => {
  //   setArticleList(doc?.articles as DocumentData);
  //   console.log(articleList);
  // });

  // onSnapshot(doc(db, "articles", auth.currentUser?.uid as string), (doc) => {
  //   if (doc !== undefined) {
  //     setArticleList(doc.data());
  //     console.log(articleList);
  //   }
  //   return {};
  // });

  return (
    <UserContext.Provider value={{ userState, username }}>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </UserContext.Provider>
  );
};
export default Layout;
