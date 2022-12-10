import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../../firebase/auth";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: any) => {
  const [userState, setUserState] = useState<any>();
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(false);
      }
    })
  });
  
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
