import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import auth, { currentUserUid } from "../../../firebase/auth";
import db, { usersDB } from "../../../firebase/firestore";
import ProfileTemplate from "./ProfileTemplate";
import { currentUserDoc } from "../../../firebase/firestore";

const Profile = () => {
  const [userDoc, setUserDoc] = useState<any>({});
  const userUID = auth.currentUser?.uid as string;

  // console.log(auth.currentUser?.uid);
  // console.log(currentUserDoc(userUID));
  // setUserDoc(currentUserDoc(userUID));

  return (
    <div>
      <ProfileTemplate username={"user"} />
    </div>
  );
};
export default Profile;
