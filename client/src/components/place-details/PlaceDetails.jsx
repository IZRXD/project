import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as placeService from '../../services/placeService';

export default function PlaceDetails() {
    const [place, setPlace] = useState({});
    const { placeId } = useParams();

    useEffect(() => {
        placeService.getOne(placeId)
            .then(setPlace);
    }, [placeId]);


    return (
        <section id="place-details">
            <h1>Place Details</h1>
            <div className="info-section">
                <div className="place-header">
                    <img className="place-img" src={place.image} alt={place.title} />
                    <h1>{place.title}</h1>
                    <p className="type">{place.theme}</p>
                </div>

                <p className="text">{place.description}</p>

              

                {/* <!-- Edit/Delete buttons ( Only for creator of this place )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

        </section>
    );
}
