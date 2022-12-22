import { deleteUser, reauthenticateWithCredential, User } from "firebase/auth";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import router from "next/router";
import auth from "../../../../firebase/auth";
import db from "../../../../firebase/firestore";
import styles from "../../../../styles/DeleteAccount.module.css";

const DeleteAccount = () => {
  // const user = auth.currentUser as User;
  const handleYes = async () => {
    const userID: User | null = auth.currentUser;
    const user = auth.currentUser?.uid;
    const q = query(collection(db, "blogs"), where("id", "==", user));
    if (user && userID !== null) {
      await deleteDoc(doc(db, "articles", user)).then(() => {
        // reauthenticateWithCredential();
        deleteDoc(doc(db, "users", user));
        deleteUser(userID);
        router.push("/");
      });
    }
  };
  const handleNo = () => {
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <h3>Do You Want To Delete Your Account ?</h3>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};
export default DeleteAccount;
