import Link from "next/link";
import auth from "../../../firebase/auth";
import styles from "../../../styles/Home.module.css";
import { routerLogin } from "../routes/Routes";

const LogedInNavbar = () => {
  const handleClick = () => {
    auth.signOut();
    routerLogin();
  };
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/profile/profile-page">Profile</Link>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
export default LogedInNavbar;
