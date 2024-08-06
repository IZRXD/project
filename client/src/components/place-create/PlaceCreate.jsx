import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as placeService from "../../services/placeService";

export default function PlaceCreate() {
  const navigate = useNavigate();

  const initialValues = { email: "", password: "", "confirm-password": "" };
  const createPlaceSubmitHandler = async (e) => {
    e.preventDefault();

    const placeData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await placeService.create(placeData);

      navigate("/places");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    createPlaceSubmitHandler
  );

  return (
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
                    <a href="/register" style={{ color: "#fff" }}>
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
