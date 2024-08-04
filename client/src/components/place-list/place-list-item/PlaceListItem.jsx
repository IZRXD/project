
import { Link } from "react-router-dom";
export default function PlaceListItem(place) {
  let link= "/places/" + place._id;
  return (
    <div className="row pt-4 gx-0 mb-5 mb-lg-0 justify-content-center">
      <div className="col-lg-6">
        <img
          className="img-fluid"
          src={place.image}
          alt={place.title}
        />
      </div>
      <div className="col-lg-6">
        <div className="bg-black text-center h-100 project">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-white">{place.title}</h4>
              <Link to={link}>More Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
