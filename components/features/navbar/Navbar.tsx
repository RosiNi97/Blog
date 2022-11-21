import styles from "../../../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/Login">Login</a>
      <a href="/Register">Register</a>
    </div>
  );
};

export default Navbar;
