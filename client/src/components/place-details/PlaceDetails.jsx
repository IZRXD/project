import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./details.css"
import * as placeService from "../../services/placeService";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PlaceDetails() {
  const [place, setPlace] = useState({});
  const { placeId } = useParams();
  const {userId} = useAuthContext();
  
  const isCreator = userId === place.authorId&&userId!=undefined&&place.authorId!=undefined;
  let editUrl = "/edit/" + placeId;
  let deleteUrl = "/delete/" + placeId ;
  
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
            <h1 className="display-5 fw-bolder specialPurple">{place.title}</h1>

            <div className="fs-5 mb-5">
              <span className="specialPurple">
                Distinguishing: {place.distinguishing}
              </span>
            </div>
            <p className="lead specialPurple">Description: </p>
            <p className="lead specialPurple">{place.description}</p>
            {isCreator ? (
              <div className="d-flex">
                <Link
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  to={editUrl}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Edit
                </Link>
                <Link
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  to={deleteUrl}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Delete
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
