import { useEffect, useState } from 'react';
import * as wallpaperService from '../../services/wallpaperService';
import WallpaperListItem from './wallpaper-list-item/WallpaperListItem';

export default function WallpaperList() {
    const [wallpapers, setWallpapers] = useState([]);

    useEffect(() => {
        wallpaperService.getAll()
            .then(result => setWallpapers(result));
    }, []);
    return (
        <section id="catalog-page">
            <h1>All Wallpapers</h1>
                {wallpapers.map(wallpaper => (
                <WallpaperListItem key={wallpaper._id} {...wallpaper} />
            ))}

            {wallpapers.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
