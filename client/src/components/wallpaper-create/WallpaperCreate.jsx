import { useNavigate } from 'react-router-dom';

import * as wallpaperService from '../../services/wallpaperService';

export default function WallpaperCreate() {
    const navigate = useNavigate();
    
    const createWallpaperSubmitHandler = async (e) => {
        e.preventDefault();

        const wallpaperData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await wallpaperService.create(wallpaperData);

            navigate('/wallpapers');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createWallpaperSubmitHandler}>
                <div className="container">
                    <h1>Create Wallpaper</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter wallpaper title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter wallpaper category..." />

            

                    <label htmlFor="wallpaper-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Wallpaper" />
                </div>
            </form>
        </section>
    );
}
