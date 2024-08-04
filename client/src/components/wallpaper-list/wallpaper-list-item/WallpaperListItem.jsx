// import { Link } from "react-router-dom";
export default function WallpaperListItem(wallpaper) {
  return (
    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
      <div className="col-lg-6">
        <img
          className="img-fluid"
          src={wallpaper.image}
          alt={wallpaper.title}
        />
      </div>
      <div className="col-lg-6">
        <div className="bg-black text-center h-100 project">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-white">{wallpaper.title}</h4>
             {/* Download */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
