import { BaseSyntheticEvent } from "react";
import styles from "../../../styles/Register.module.css";
const RegisterForm = (props: {
  HandleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
}) => {
  return (
    <div className={styles.register}>
      <form onSubmit={props.HandleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default RegisterForm;
