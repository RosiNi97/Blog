import styles from "../../../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/navbar/LoginPage">Login</a>
      <a href="/navbar/RegisterPage">Register</a>
    </div>
  );
};

export default Navbar;
