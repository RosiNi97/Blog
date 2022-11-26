import Link from "next/link";
import styles from "../../../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/navbar/loginPage">Login</Link>
      
      {/* <Link href="/navbar/registerPage">Register</Link> */}
    </div>
  );
};

export default Navbar;
