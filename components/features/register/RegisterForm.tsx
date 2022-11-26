import { BaseSyntheticEvent } from "react";
import styles from "../../../styles/Register.module.css";
const RegisterForm = (props: {
  HandleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
}) => {
  return (
    //The class names are placeholders
    <div className={styles.register}>
      <form onSubmit={props.HandleSubmit} name="Register Form">
        <div className={styles.title}>Register</div>
        <label htmlFor="username"/>
        <input type="text" name="username" placeholder="Username"  />
        <label htmlFor="email"/>
        <input
          type="email"
          className={styles.email}
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password"/>
        <input
          type="password"
          className={styles.password}
          name="password"
          placeholder="password"
        />

        <input type="submit" className={styles.button} value="Register" />
      </form>
    </div>
  );
};
export default RegisterForm;
