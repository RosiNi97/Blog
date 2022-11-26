import Link from "next/link";
import { BaseSyntheticEvent } from "react";
import styles from "../../../styles/Login.module.css";

const LoginForm = (props: { HandleLogin: (e: BaseSyntheticEvent) => void }) => {
  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={props.HandleLogin} name="Login Form">
        <div className={styles.inputs}>
          <div className={styles.title}>Login</div>
          <label htmlFor="email"/>
          <input type="email" name="email" placeholder="Email" />
          <label htmlFor="password"/>
          <input type="password" name="password" placeholder="password" />
          <label htmlFor="Submit Button"/>
          <input type="submit" className={styles.button} value="Log In" name="Submit Button" />
        </div>
        <Link href="./registerPage" className={styles.redirect} >
          register
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
