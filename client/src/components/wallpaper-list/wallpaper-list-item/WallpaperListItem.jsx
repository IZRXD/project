
import DownloadLink from "react-download-link"
export default function WallpaperListItem(wallpaper) {

  return (
    <div className="row pt-4 gx-0 mb-5 mb-lg-0 justify-content-center">
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
              <DownloadLink
                label="Download Image"
                filename="image.jpg"
                exportFile={() =>
                  fetch(wallpaper.image).then((res) =>
                    res.blob()
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
