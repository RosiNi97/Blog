import Link from "next/link";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const ProfileTemplate = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <div className="userProfile">Hello, {username}</div>
      <h1>OPTIONS:</h1>
      <Link href="/profile/change-password">Change Password</Link>
      <Link href="/profile/delete-account">Delete Account</Link>
    </div>
  );
};
export default ProfileTemplate;
