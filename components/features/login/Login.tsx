import Link from "next/link";
import { BaseSyntheticEvent } from "react";
import styles from "../../../styles/Login.module.css";

const LoginForm = (props: { HandleLogin: (e: BaseSyntheticEvent) => void }) => {
  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={props.HandleLogin}>
        <div className={styles.inputs}>
          <div className={styles.title}>Login</div>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" className={styles.button} value="Log In" />
        </div>
        <Link href="./registerPage" className={styles.redirect}>
          register
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
