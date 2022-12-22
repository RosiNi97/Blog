import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../../firebase/auth";
import { currentUserDoc } from "../../../firebase/firestore";

const Navbar = () => {
  const { setUserState, setUsername, userState } = useContext(UserContext);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserState(true);
        const currentUID = auth.currentUser?.uid;
        currentUserDoc(currentUID).then((data) => {
          if (data?.username !== undefined) {
            setUsername(data.username);
          }
        });
      } else {
        setUserState(false);
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
