import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css"
import * as placeService from "../../services/placeService";

export default function PlaceDetails() {
  const [place, setPlace] = useState({});
  const { placeId } = useParams();

  useEffect(() => {
    placeService.getOne(placeId).then(setPlace);
  }, [placeId]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={place.image}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{place.title}</h1>

            <div className="fs-5 mb-5">
              <span>Theme: {place.theme}</span>
            </div>
            <p className="lead">Description: </p>
            <p className="lead">{place.description}</p>
            <div className="d-flex">
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Edit
              </button>
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
