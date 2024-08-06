import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import "./login.css";
export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };
  const loginHandler = async ({ email, password }) => {
    try {
      let result = await login(email, password);
      
      if(result?.code==403){
        throw new Error("Bad respond")
      }
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
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">Have an account?</h3>
              <form onSubmit={submitHandler} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={values.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password-field"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn-sign btn-primary submit px-3"
                  >
                    Sign In
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-40 text-md-right">
                    <a href="/register" style={{color: "#fff"}}>
                      Create an account
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
