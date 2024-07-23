import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as wallpaperService from '../../services/wallpaperService';

export default function WallpaperDetails() {
    const [wallpaper, setWallpaper] = useState({});
    const { wallpaperId } = useParams();

    useEffect(() => {
        wallpaperService.getOne(wallpaperId)
            .then(setWallpaper);
    }, [wallpaperId]);


    return (
        <section id="wallpaper-details">
            <h1>Wallpaper Details</h1>
            <div className="info-section">
                <div className="wallpaper-header">
                    <img className="wallpaper-img" src={wallpaper.imageUrl} alt={wallpaper.title} />
                    <h1>{wallpaper.title}</h1>
                    <p className="type">{wallpaper.category}</p>
                </div>

                <p className="text">{wallpaper.summary}</p>

              

                {/* <!-- Edit/Delete buttons ( Only for creator of this wallpaper )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

        </section>
    );
}
