import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const Login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
    Login();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <input type="submit" value="Log In" />
      <a href="/registerPage">register</a>
    </form>
  );
};

export default LoginForm;
