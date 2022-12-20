import Link from "next/link";
import styles from "../../../styles/Profile.module.css";

const LogedOutNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/navbar/loginPage">Login</Link>
    </div>
  );
};

export default LogedOutNavbar;
