import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {edit} from "../../services/placeService";
import { useGetOnePlaces } from "../../hooks/usePlaces";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PlaceEdit() {
  const navigate = useNavigate();
  const {placeId} = useParams();
  const [place] = useGetOnePlaces(placeId);
  const {userId} = useAuthContext();
  const editPlaceSubmitHandler = async (values) => {
    values._id = placeId;
    values.authorId = userId;
    try {
     await edit(placeId,values)
     
      navigate("/places/"+placeId);
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    place,
    editPlaceSubmitHandler
  );

  return (
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
                    id="distinguish"
                    name="distinguish"
                    value={values.distinguish}
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
                    Edit
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
