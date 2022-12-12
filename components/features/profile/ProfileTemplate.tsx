import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../layout/Layuot";

const ProfileTemplate = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <div className="userProfile">Hello, {username}</div>
      <h1>OPTIONS:</h1>
      <Link href="/navbar/changePassword">Change Password</Link>
      <Link href=""></Link>
      <li>Change Password</li>
      <li>Delete Account</li>
    </div>
  );
};
export default ProfileTemplate;
