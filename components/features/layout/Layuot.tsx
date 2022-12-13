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
  articleList: [{}],
});

const Layout = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState<Array<object>>([{}]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(true);
      currentUserDoc(auth.currentUser?.uid as string).then((data) => {
        setUsername(data?.username as string);
        console.log(username);
      });
      const articleRef = doc(db, "articles", auth.currentUser?.uid as string);
      onSnapshot(articleRef, (doc) => {
        if (doc !== undefined) {
          const docData = doc.data();
          setArticleList(docData?.articles as Array<object>);
        }
      });
    } else {
      setUserState(false);
    }
  });

  return (
    <UserContext.Provider value={{ userState, username, articleList }}>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </UserContext.Provider>
  );
};
export default Layout;
