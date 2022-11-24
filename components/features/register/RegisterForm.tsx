import { BaseSyntheticEvent } from "react";

const RegisterForm = (props: {
  HandleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
}) => {
  return (
    <div className="submit-form">
      <form onSubmit={props.HandleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default RegisterForm;
