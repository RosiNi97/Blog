import { registerWithEmailPassword } from "../../../firebase/auth";
import { BaseSyntheticEvent } from "react";
import RegisterForm from "./RegisterForm";
import { AddUser } from "../../../firebase/firestore";
import { currentUser } from "../../../firebase/auth";

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
