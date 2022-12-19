import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../../firebase/auth";
import db, { currentUserDoc } from "../../../firebase/firestore";
import { collection, doc, onSnapshot } from "firebase/firestore";

const Navbar = () => {
  const { getUserState, getArticleList, getUsername, userState } =
    useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserState(true);
        const currentUID = auth.currentUser?.uid;
        currentUserDoc(currentUID).then((data) => {
          getUsername(data?.username);
        });
        const blogRef = collection(db, "docs");
        onSnapshot(blogRef, (doc) => {
          if (doc !== undefined) {
            console.log(doc.docs);
            const docData = doc;
            // getArticleList();
          }
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
