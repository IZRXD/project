import { useNavigate } from 'react-router-dom';

import * as placeService from '../../services/placeService';

export default function PlaceCreate() {
    const navigate = useNavigate();
    
    const createPlaceSubmitHandler = async (e) => {
        e.preventDefault();

        const placeData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await placeService.create(placeData);

            navigate('/places');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createPlaceSubmitHandler}>
                <div className="container">
                    <h1>Create Place</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter place title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter place category..." />

            

                    <label htmlFor="place-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Place" />
                </div>
            </form>
        </section>
    );
}
