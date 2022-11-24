import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
import { FormEvent, BaseSyntheticEvent } from "react";
// import { auth } from "../../../firebase/firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../firebase/firebaseConfig";

const RegisterForm = (props: {
  HandleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
}) => {
  // const [registerEmail, setRegisterEmail] = useState<string>("");
  // const [registerPassword, setRegisterPassword] = useState<string>("");
  // const usersCollection = collection(db, "users");

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  //   try {
  //     await addDoc(usersCollection, {
  //       username: registerEmail,
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <div className="submit-form">
      <form onSubmit={props.HandleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default RegisterForm;
