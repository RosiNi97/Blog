import Link from "next/link";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const ProfileTemplate = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <div className="userProfile">Hello, {username}</div>
      <h1>OPTIONS:</h1>
      <Link href="/navbar/changePassword">Change Password</Link>
      <Link href="/navbar/deleteAccount">Delete Account</Link>
    </div>
  );
};
export default ProfileTemplate;
