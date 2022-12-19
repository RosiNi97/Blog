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
import { collection, onSnapshot } from "firebase/firestore";
import { IArticle } from "../../../types/types";

const Navbar = () => {
  const { getUserState, getArticleList, getUsername, userState, articleList } =
    useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserState(true);
        const currentUID = auth.currentUser?.uid;
        currentUserDoc(currentUID).then((data) => {
          getUsername(data?.username);
        });
        const blogRef = collection(db, "blogs");
        getBlogCollections().then((blogs) => {
          blogs.forEach((blog: any) => {
            getArticleList([...[blog.data()]]);
          });
        });
        // onSnapshot(blogRef, async (docs) => {
        //   docs.forEach((blog: any) => {
        //     const blogData = blog.data();

        //     getArticleList([...[blogData]]);
        //   });
        // });
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
