import { useState,useEffect } from "react";
import { getAll } from "../../services/wallpaperService";
import WallpaperListItem from "../wallpaper-list/wallpaper-list-item/WallpaperListItem";

export default function Home() {
  let [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    getAll().then((result) => setWallpapers(result));
  }, []);
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>Best New wallpapers</h2>
        <h3>Best New wallpapers</h3>
      </div>
      {/* <img src="./images/four_slider_img01.png" alt="hero" /> */}

      <div id="home-page">
        <h1>Latest Wallpapers</h1>

        {wallpapers.map((wallpaper) => (
          <WallpaperListItem key={wallpaper._id} {...wallpaper} />
        ))}

        {wallpapers.length === 0 && (
          <p className="no-articles">No wallpapers yet</p>
        )}
      </div>
    </section>
  );
}
