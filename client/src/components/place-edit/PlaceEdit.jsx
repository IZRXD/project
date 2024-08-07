import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { edit } from "../../services/placeService";
import { useGetOnePlaces } from "../../hooks/usePlaces";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";

export default function PlaceEdit() {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const { userId } = useAuthContext();
  const [fetchedPlace] = useGetOnePlaces(placeId);
  const [error, setError] = useState("");

  const { values, changeHandler, submitHandler, setValues } = useForm(
    { title: "", description: "", image: "", distinguishing: "" },
    editPlaceSubmitHandler
  );

  useEffect(() => {
    if (fetchedPlace) {
      setValues(fetchedPlace);
    }
  }, [fetchedPlace, setValues]);

  async function editPlaceSubmitHandler(values) {
    values._id = placeId;
    values.authorId = userId;
    if (values.authorId != userId) {
      return navigate("/");
    }

    try {
      if (values.title.length > 20) {
        throw new Error("too big title");
      }
      if (values.description.length < 5) {
        throw new Error("too little description");
      }

      await edit(placeId, values);
      navigate("/places/" + placeId);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      {error && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Edit</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <form onSubmit={submitHandler} className="form">
                  <div className="form-group">
                    <input
                      id="title"
                      placeholder="title"
                      className="form-control"
                      type="text"
                      value={values.title}
                      onChange={changeHandler}
                      name="title"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="distinguish"
                      placeholder="distinguish"
                      name="distinguishing"
                      type="text"
                      value={values.distinguishing}
                      onChange={changeHandler}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="image"
                      id="image"
                      placeholder="image"
                      type="text"
                      value={values.image}
                      onChange={changeHandler}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="description"
                      id="description"
                      placeholder="description"
                      type="text"
                      value={values.description}
                      onChange={changeHandler}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn-sign btn-primary submit px-3"
                    >
                      Edit
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
