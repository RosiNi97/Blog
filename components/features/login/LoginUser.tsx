import { BaseSyntheticEvent } from "react";
import auth, { loginEmailPass } from "../../../firebase/Auth";
import LoginForm from "./Login";

export default function LoginUser() {
  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    loginEmailPass(email, password);
  };
  return <LoginForm HandleLogin={handleLogin} />;
}
