 import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import "./register.css"

export default function Register() {
  const [error, setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const initialValues = { email: "", password: "", "confirm-password": "" };

  const registerHandler = async (values) => {
    if (values.password !== values["confirm-password"]) {
      return setError("Password mismatch!");
    }
    if (values.password.length <6) {
      return setError("Password is too low on characters");
    }
    if(!values.email.includes('@')){
      
        return setError("Not email");
    }

    try {
     let result = await register(values.email, values.password);
      if(result?.code){
        throw new Error(result.message);
      }
      
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <>
      {error && (
        <div className="error-container ">
          <p>{error}</p>
        </div>
      )}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Register</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
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
                  </div>{" "}
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      value={values["confirm-password"]}
                      onChange={changeHandler}
                      className="form-control"
                      placeholder="Repeat Password"
                      required
                    />
                    <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn-sign btn-primary submit px-3"
                    >
                     Register
                    </button>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
