import {
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import auth, { currentUserUid } from "../../../firebase/auth";
import db, { usersDB } from "../../../firebase/firestore";
import ProfileTemplate from "./ProfileTemplate";
import { currentUserDoc } from "../../../firebase/firestore";

const Profile = (props: any) => {
  const [userDoc, setUserDoc] = useState<DocumentData>();
  const [username, setUsername] = useState();

  const handleClick = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const docSnap = await currentUserDoc(auth.currentUser?.uid as string);
    setUserDoc(docSnap);
    console.log("userDoc :" + userDoc);
    setUsername(docSnap?.username);
  };

  return (
    <div>
      <ProfileTemplate username={username} />
      <button onClick={(e) => handleClick(e)}>Click</button>
    </div>
  );
};
export default Profile;
