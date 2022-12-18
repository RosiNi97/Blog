import { updatePassword, User } from "firebase/auth";
import { BaseSyntheticEvent, FormEvent } from "react";
import auth from "../../../../firebase/auth";

const ChangePassowrd = () => {
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const user = auth.currentUser as User;

    const oldPass = form.get("oldPass") as string;
    const newPass = form.get("newPass") as string;
    const repeatPass = form.get("repeatPass") as string;

    if (newPass == repeatPass) {
      updatePassword(user, newPass);
    } else {
      alert("Passwords Do Not Match!");
    }
    e.target.reset();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="password" name="oldPass" placeholder="Old Password" />
      <input type="password" name="newPass" placeholder="New Password" />
      <input
        type="password"
        name="repeatPass"
        placeholder="Repeat New Password"
      />
      <input type="submit" value="Change Password" />
    </form>
  );
};
export default ChangePassowrd;
