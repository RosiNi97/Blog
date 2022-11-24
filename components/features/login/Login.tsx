import Link from "next/link";
import { BaseSyntheticEvent } from "react";

const LoginForm = (props: { HandleLogin: (e: BaseSyntheticEvent) => void }) => {
  return (
    <form onSubmit={props.HandleLogin}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <input type="submit" value="Log In" />
      <Link href="./registerPage">register</Link>
    </form>
  );
};

export default LoginForm;
