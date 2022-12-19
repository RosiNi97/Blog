import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../../firebase/auth";
import db, { currentUserDoc } from "../../../firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";

const Navbar = () => {
  const { GetUserState, GetArticleList, GetUsername, userState } =
    useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        GetUserState(true);
        const currentUID = auth.currentUser?.uid;
        currentUserDoc(currentUID).then((data) => {
          GetUsername(data?.username);
        });
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

  if (userState) {
    return <LogedInNavbar />;
  } else {
    return <LogedOutNavbar />;
  }
};

export default Navbar;
