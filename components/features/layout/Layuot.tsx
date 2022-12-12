import { onAuthStateChanged } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { useState, createContext, useEffect } from "react";
import auth from "../../../firebase/auth";
import {
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
      currentUserArticles(auth.currentUser?.uid as string).then((doc) => {
        setArticleList(doc?.articles as DocumentData);
        console.log(articleList);
      });
    } else {
      setUserState(false);
    }
  });
  // useEffect(() => {
  // currentUserArticles(auth.currentUser?.uid as string).then(
  //   (doc) => {
  //     setArticleList(doc?.articles as DocumentData);
  //       console.log(articleList);
  //     },
  //     [articleList]
  //   );
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
