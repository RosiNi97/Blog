import Link from "next/link";
import router from "next/router";
import auth from "../../../firebase/auth";
import styles from "../../../styles/Home.module.css";

const LogedInNavbar = () => {
  const handleClick = () => {
    auth.signOut();
    router.push("./navbar/loginPage");
  };
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/navbar/profilePage">Profile</Link>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
export default LogedInNavbar;
