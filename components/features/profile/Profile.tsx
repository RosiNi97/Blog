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
import { useRouter } from "next/router";
import UserPostList from "./UserPosts";

const Profile = () => {
  const [userDoc, setUserDoc] = useState<DocumentData>();
  const [username, setUsername] = useState();

  console.log(auth.currentUser)

  useEffect(() => {
    currentUserDoc(auth.currentUser?.uid as string).then((doc) => {
      setUserDoc(doc);
      setUsername(doc?.username );
    });
  }, [auth.currentUser]);
  

  return (
    <div>
      <ProfileTemplate username={username} />
      <UserPostList/>
    </div>
  );
};
export default Profile;
