import { BaseSyntheticEvent } from "react";
import auth, { loginEmailPass } from "../../../firebase/auth";
import LoginForm from "./Login";
import middleware from "./redirect";

export default function LoginUser() {
  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    loginEmailPass(email, password);
    console.log(auth.currentUser);
    e.target.reset();
  };
  return <LoginForm HandleLogin={handleLogin} />;
}
