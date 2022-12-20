import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../../firebase/auth";
import db, {
  currentUserDoc,
  getBlogCollections,
} from "../../../firebase/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { IArticle } from "../../../types/types";
import { async } from "@firebase/util";

const Navbar = () => {
  const { getUserState, getArticleList, setUsername, userState, articleList } =
    useContext(UserContext);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        getUserState(true);
        const currentUID = auth.currentUser?.uid;
        currentUserDoc(currentUID).then((data) => {
          setUsername(data?.username);
        });
        const blogRef = collection(db, "blogs");
        // const docSnap = await getDocs(blogRef);
        // docSnap.forEach((blog) => {
        //   getArticleList(blog.data() as IArticle);
        // });
        onSnapshot(blogRef, (snapshot) => {
          const blogList: Array<IArticle> = [];
          snapshot.docs.forEach((blog: any) => {
            blogList.push(blog.data());
          });
          getArticleList(blogList);
        });
      } else {
        getUserState(false);
      }
    });
  }, []);

  if (userState) {
    return <LogedInNavbar />;
  } else {
    return <LogedOutNavbar />;
  }
};

export default Navbar;
