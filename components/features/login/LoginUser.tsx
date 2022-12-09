import router from "next/router";
import { BaseSyntheticEvent } from "react";
import { loginEmailPass } from "../../../firebase/auth";
import { routerProfile } from "../routes/routes";

import LoginForm from "./Login";

export default function LoginUser() {
  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    loginEmailPass(email, password);
    e.target.reset();
  };

  return <LoginForm HandleLogin={handleLogin} />;
}
