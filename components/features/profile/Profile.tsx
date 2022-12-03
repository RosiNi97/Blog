import { query, where } from "firebase/firestore";
import { useEffect } from "react";
import auth, { currentUserUid } from "../../../firebase/auth";
import { usersDB } from "../../../firebase/firestore";
import ProfileTemplate from "./ProfileTemplate";

const Profile = () => {
  const username = async () => {
    try {
      return query(usersDB, where("username", "==", currentUserUid));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ProfileTemplate username={username} />
    </div>
  );
};
export default Profile;
