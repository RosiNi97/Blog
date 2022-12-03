import Link from "next/link";
import auth from "../../../firebase/auth";
import styles from "../../../styles/Home.module.css";

const LogedInNavbar = () => {
  const handleClick = () => {
    auth.signOut();
  };
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="../profilePage">Profile</Link>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
export default LogedInNavbar;
