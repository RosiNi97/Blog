import { BaseSyntheticEvent } from "react";
import styles from "../../../styles/Register.module.css";
const RegisterForm = (props: {
  HandleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
}) => {
  return (
    //The class names are placeholders
    <div className={styles.register}>
      <form onSubmit={props.HandleSubmit}>
        <div className={styles.title}>Register</div>

        <input
          type="email"
          className={styles.email}
          name="email"
          placeholder="Email"
        />

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
