import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext } from "react";
import auth from "../../../firebase/auth";
import {
  currentUserArticles,
  currentUserDoc,
} from "../../../firebase/firestore";
import Navbar from "../navbar/Navbar";

export const UserContext = createContext({
  userState: false,
  username: "",
  articleList: {},
});

const Layout = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(true);
      currentUserDoc(auth.currentUser?.uid as string).then((data) => {
        // const { user, articles } = data;
        setUsername(data?.user as string);
        // setArticleList(data?.articles.articles);
        // console.log(data?.user as string);
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
