import { useContext } from "react";
import { UserContext } from "../layout/Layuot";

const ProfileTemplate = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <div className="userProfile">Hello, {username}</div>
      <ul className="userOptions">
        OPTIONS:
        <li>Change Password</li>
        <li>Delete Account</li>
      </ul>
    </div>
  );
};
export default ProfileTemplate;
