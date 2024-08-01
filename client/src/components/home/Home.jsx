// import { useState,useEffect } from "react";
// import { getAll } from "../../services/wallpaperService";
// import WallpaperListItem from "../wallpaper-list/wallpaper-list-item/WallpaperListItem";
import { Link } from "react-router-dom";
export default function Home() {
  // let [wallpapers, setWallpapers] = useState([]);

  // useEffect(() => {
  //   getAll().then((result) => setWallpapers(result));
  // }, []);
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              A free, responsive, one page Bootstrap theme created by Start
              Bootstrap.
            </h2>
            <Link className="btn btn-primary" to="/about">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
