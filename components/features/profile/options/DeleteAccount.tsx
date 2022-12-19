import { deleteUser, User } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import router from "next/router";
import auth from "../../../../firebase/auth";
import db from "../../../../firebase/firestore";

const DeleteAccount = () => {
  const user = auth.currentUser as User;
  const handleYes = async () => {
    await deleteDoc(doc(db, "articles", user?.uid as string)).then(() => {
      deleteDoc(doc(db, "users", user?.uid as string));
      deleteUser(user);
      router.push("/");
    });
  };
  const handleNo = () => {
    router.push("/");
  };
  return (
    <div>
      <h3>Do You Want To Delete Your Account?</h3>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};
export default DeleteAccount;
