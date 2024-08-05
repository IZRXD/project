import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };
  const loginHandler = async ({ email, password }) => {
    try {
      login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    // <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" className="auth">
      <form id="login" onSubmit={submitHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            placeholder="Sokka@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you do not have profile click <a href="/register">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
