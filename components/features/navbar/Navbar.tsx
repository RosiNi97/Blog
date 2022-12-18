import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { userState } = useContext(UserContext);

  if (userState) {
    return <LogedInNavbar />;
  } else {
    return <LogedOutNavbar />;
  }
};

export default Navbar;
