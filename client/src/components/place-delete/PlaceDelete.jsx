import { useNavigate, useParams } from "react-router-dom";
import { deleting } from "../../services/placeService";

export default function PlaceEdit() {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const deletePlace = async () => {
    try {
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
