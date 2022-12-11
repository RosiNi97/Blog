import LogedInNavbar from "./LoggedInNavbar";
import LogedOutNavbar from "./LoggedOutNavbar";
import { useContext } from "react";
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
