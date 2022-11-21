import { FormEvent } from "react";

const LoginForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="password" />
      <input type="submit" value="Log In" />
      <a href="/Register">register</a>
    </form>
  );
};

export default LoginForm;
