import { registerWithEmailPassword } from "../../../firebase/auth";
import { BaseSyntheticEvent } from "react";
import RegisterForm from "./RegisterForm";
import router from "next/router";

const RegisterUser = () => {
  const Register = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const username = form.get("username")?.toString();
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    if (username && email && password) {
      registerWithEmailPassword(email, password, username);
    }
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
