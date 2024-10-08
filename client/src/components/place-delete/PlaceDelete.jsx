import { useNavigate, useParams } from "react-router-dom";
import { deleting, getOne } from "../../services/placeService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

export default function PlaceEdit() {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const { userId } = useAuthContext();
  const [error, setError] = useState("");

  const deletePlace = async () => {
    try {
      const fetchedPlace = await getOne(placeId);
      if (fetchedPlace.authorId != userId) {
        return navigate("/");
      }

      await deleting(placeId);

      navigate("/places/");
    } catch (err) {
      setError(err.message);
    }
  };
  deletePlace();

  return (
    <>
      {error && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
