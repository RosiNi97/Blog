import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FormEvent } from "react";
import { auth } from "../../../firebase/firebaseConfig";

const RegisterForm = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e: FormEvent) => {
    register();
  };
  return (
    <div className="submit-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />

        <input
          type="password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default RegisterForm;
