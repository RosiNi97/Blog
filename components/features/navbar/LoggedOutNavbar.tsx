import Link from "next/link";
import styles from "../../../styles/Home.module.css";

const LogedOutNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/profile/login-page">Login</Link>
    </div>
  );
};

export default LogedOutNavbar;
