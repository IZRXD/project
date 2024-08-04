import { useEffect, useState } from "react";
import * as placeService from "../../services/placeService";
import PlaceListItem from "./place-list-item/PlaceListItem";

export default function PlaceList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    placeService.getAll().then((result) => setPlaces(result));
  }, []);
  return (
    <section className=" projects-section bg-light " id="projects">
      <div className="container px-4 px-lg-5">
        {places.map((place) => (
          <PlaceListItem key={place._id} {...place} />
        ))}

        {places.length === 0 && (
          <h3 className="no-articles">No places yet</h3>
        )}
      </div>
    </section>
  );
}
