import { deleteUser, signInWithEmailAndPassword, User } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import router from "next/router";
import { BaseSyntheticEvent } from "react";
import auth from "../../../../firebase/auth";
import db from "../../../../firebase/firestore";
import styles from "../../../../styles/DeleteAccount.module.css";

const DeleteAccount = () => {
  const handleYes = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("Email")?.toString();
    const password = form.get("Password")?.toString();
    const userID: User | null = auth.currentUser;
    const user = auth.currentUser?.uid;
    const q = query(collection(db, "blogs"), where("id", "==", user));
    const snapshot = getDocs(q);

    if (user && userID != null && email && password) {
      signInWithEmailAndPassword(auth, email, password).then(async () => {
        (await snapshot).forEach((snap) =>
          deleteDoc(doc(db, "blogs", snap.id))
        );
        deleteDoc(doc(db, "usersDB", user));
        deleteUser(userID);
      });
    } else {
      alert("Wrong Credentials");
    }
    router.push("/");
  };

  const handleNo = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h3>Do You Want To Delete Your Account ?</h3>
      <form name="reauthenticate" onSubmit={handleYes}>
        <label htmlFor="Email"></label>
        <input type="text" name="Email" placeholder="Email" />
        <label htmlFor="Password"></label>
        <input type="password" name="Password" placeholder="Password" />
        <label htmlFor="Delete Account"></label>
        <input
          type="submit"
          value="Delete Account"
          name="Delete Account"
          className={styles.button}
        />
        <label htmlFor="Cancel"></label>
        <button onClick={handleNo} name="Cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};
export default DeleteAccount;
