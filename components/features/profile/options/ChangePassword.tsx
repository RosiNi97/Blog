import { updatePassword, User } from "firebase/auth";
import { BaseSyntheticEvent } from "react";
import auth from "../../../../firebase/auth";
import styles from "../../../../styles/ChangePass.module.css";

const ChangePassowrd = () => {
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const user = auth.currentUser as User;

    const oldPass = form.get("Old Password") as string;
    const newPass = form.get("New Password") as string;
    const repeatPass = form.get("repeatPass") as string;

    if (newPass == repeatPass) {
      updatePassword(user, newPass);
    } else {
      alert("Passwords Do Not Match!");
    }
    e.target.reset();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
      <label htmlFor="Old Password" />
      <input type="password" name="Old Password" placeholder="Old Password" />
      <label htmlFor="New Password" />
      <input type="password" name="New Password" placeholder="New Password" />
      <label htmlFor="Repeat Password" />
      <input
        type="password"
        name="Repeat Password"
        placeholder="Repeat New Password"
      />
      <label htmlFor="Change Password" />
      <input type="submit" value="Change Password" className={styles.button} />
    </form>
  );
};
export default ChangePassowrd;
