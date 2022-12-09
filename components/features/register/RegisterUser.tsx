import { registerWithEmailPassword } from "../../../firebase/auth";
import { BaseSyntheticEvent } from "react";
import RegisterForm from "./RegisterForm";
import router from "next/router";

const RegisterUser = () => {
  const Register = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    registerWithEmailPassword(email, password, username);
    e.target.reset();
    router.push("/");
  };
  return (
    <div>
      <RegisterForm HandleSubmit={Register} />
    </div>
  );
};

export default RegisterUser;
