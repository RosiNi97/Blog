import Link from "next/link";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import styles from "../../../styles/Profile.module.css";
const ProfileTemplate = () => {
  const { username } = useContext(UserContext);

  return (
    <div className={styles.options}>
      <h1 className="userProfile">Hello, {username}!</h1>
      <h2>OPTIONS:</h2>
      <div className={styles.links}>
        <Link href="/navbar/changePassword">Change Password</Link>
        <Link href="/navbar/deleteAccount">Delete Account</Link>
      </div>
    </div>
  );
};
export default ProfileTemplate;
