import {  getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import auth, { currentUserUid } from "../../../firebase/auth";
import { usersDB } from "../../../firebase/firestore";
import ProfileTemplate from "./ProfileTemplate";

const Profile = () => {
  const [user, setUsername] = useState<any>("username");
  


  const userObj = query(usersDB, where("username", "==", "username25"))
  const userDoc =async()=>  await getDocs(usersDB)
  // // const username = () => {
  // //   try {
  // //     setUsername(query(usersDB, where("username"r, "==", currentUserUid)));
  // //   } catch (err) {
  // //     console.log(err);
  // //   }
  // // };

  useEffect(() => {
    console.log(userDoc)
  })

  return (
    <div>
      <ProfileTemplate username={user} />
    </div>
  );
};
export default Profile;
