import { useNavigate, useParams } from "react-router-dom";
import { deleting, getOne } from "../../services/placeService";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PlaceEdit() {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const { userId } = useAuthContext();
  const deletePlace = async () => {
    try {
      const fetchedPlace = await getOne(placeId);
      if (fetchedPlace.authorId != userId) {
         return navigate("/");
      }

      await deleting(placeId);

      navigate("/places/");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };
  deletePlace();

  return <></>;
}
