import router from "next/router";
import { BaseSyntheticEvent } from "react";
import { loginEmailPass } from "../../../firebase/auth";

import LoginForm from "./Login";

export default function LoginUser() {
  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    if (email && password) {
      loginEmailPass(email, password);
    } else {
      alert("Invalid Information");
    }
    e.target.reset();
  };

  return <LoginForm HandleLogin={handleLogin} />;
}
