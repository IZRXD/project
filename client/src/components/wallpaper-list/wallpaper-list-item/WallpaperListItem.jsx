import { Link } from "react-router-dom";

export default function WallpaperListItem(wallpaper) {
    return (
      <div className="allWallpapers">
        <div className="allWallpapers-info">
          <img src={wallpaper.image} />
          <h6>{wallpaper.tags}</h6>
          <h2>{wallpaper.title}</h2>
          <Link to={`/wallpapers/${wallpaper._id}`} className="details-button">
            Details
          </Link>
        </div>
      </div>
    );
}
