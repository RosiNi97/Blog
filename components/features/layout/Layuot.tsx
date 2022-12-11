import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext } from "react";
import auth from "../../../firebase/auth";
import { currentUserDoc } from "../../../firebase/firestore";
import Navbar from "../navbar/Navbar";

export const UserContext = createContext({
  userState: false,
  username: "",
});

const Layout = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(true);
      currentUserDoc(auth.currentUser?.uid as string).then((doc) => {
        setUsername(doc?.username);
      });
    } else {
      setUserState(false);
    }
  });

  return (
    <UserContext.Provider value={{ userState, username }}>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </UserContext.Provider>
  );
};
export default Layout;
