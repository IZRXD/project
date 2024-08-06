import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as placeService from "../../services/placeService";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PlaceCreate() {
  const navigate = useNavigate();
  const {userId} =useAuthContext();
  const initialValues = { title: "", distinguishing: "",description: "", image: "", };
  const createPlaceSubmitHandler = async (values) => {

    const placeData = values;
    placeData.authorId = userId
    
    try {
     let place = await placeService.create(placeData);

      navigate("/places/"+place._id);
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
            <h2 className="heading-section">Create</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <form onSubmit={submitHandler} className="form">
                <div className="form-group">
                  <input
                  id="title"
                    className="form-control"
                    value={values.title}
                    onChange={changeHandler}
                    name="title"
                    placeholder="title"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    id="distinguishing"
                    name="distinguishing"
                    value={values.distinguishing}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="distinguish"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="image"
                    id="image"
                    value={values.image}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="image"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="description"
                    required
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn-sign btn-primary submit px-3"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
