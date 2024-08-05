import { useEffect, useState } from "react";
import { getAll,getOne,create } from "../services/placeService";
export function useGetAllPlaces() {
const [places, setPlaces] = useState([]);

    useEffect(() => {
        (
            async () => {
                const result = await getAll();
                setPlaces(result);
             }
        )();
    }, []);

    return [places, setPlaces];
}

export function useGetOnePlaces(placeId) {
    const [place, setPlace] = useState({});

    useEffect(() => {
        (
            async () => {
               const result = await getOne(placeId);
               setPlace(result);
            }
        )();
    }, [placeId]);

    return[
        place,
        setPlace
    ];
}

export function useCreatePlace() {
    const placeCreateHandler = (placeData) => create(placeData)

    return placeCreateHandler;
}