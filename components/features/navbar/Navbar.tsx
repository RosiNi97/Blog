import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import auth from "../../../firebase/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [userLogged, setUserLogged] = useState<boolean>(false);
  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogged(true);
      // } else {      </ThemeContext.Provider>

      setUserLogged(false);
      }
    })
  );

  if (userLogged) {
    return <LogedInNavbar />;
  } else {
    return <LogedOutNavbar />;
  }
};

export default Navbar;
