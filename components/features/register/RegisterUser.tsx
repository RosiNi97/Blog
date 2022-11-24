import { registerWithEmailPassword } from "../../../firebase/Auth";
import { BaseSyntheticEvent } from "react";
import RegisterForm from "./RegisterForm";
import { AddUser } from "../../../firebase/Firestore";
import { currentUser } from "../../../firebase/Auth";

const RegisterUser = () => {
  const Register = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    registerWithEmailPassword(email, password);

    AddUser(email, currentUser);
  };
  return (
    <div>
      <RegisterForm HandleSubmit={Register} />
    </div>
  );
};

export default RegisterUser;
