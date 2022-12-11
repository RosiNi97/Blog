import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import auth, { user } from "../../../firebase/auth";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../layout/Layuot";

const Navbar = () => {
  const { userState } = useContext(UserContext);

  if (userState) {
    return <LogedInNavbar />;
  } else {
    return <LogedOutNavbar />;
  }
};

export default Navbar;
