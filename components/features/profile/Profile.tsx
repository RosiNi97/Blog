import {
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../layout/Layuot";
import ProfileTemplate from "./ProfileTemplate";
import UserPostList from "./UserPosts";

const Profile = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <ProfileTemplate username={username} />
      <UserPostList />
    </div>
  );
};
export default Profile;
