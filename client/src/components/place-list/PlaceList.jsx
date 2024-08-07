import { useEffect, useState } from "react";
import * as placeService from "../../services/placeService";
import PlaceListItem from "./place-list-item/PlaceListItem";
import "./place-list.css"
export default function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    placeService.getAll().then((result) => {
      setPlaces(result);
      setLoading(false); // Set loading to false after data is fetched
    });
  }, []);

  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : places.length > 0 ? (
          places.map((place) => <PlaceListItem key={place._id} {...place} />)
        ) : (
          <h3 className="no-articles">No places yet</h3>
        )}
      </div>
    </section>
  );
}
