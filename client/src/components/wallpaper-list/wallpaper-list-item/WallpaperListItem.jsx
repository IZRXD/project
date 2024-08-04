import { Link } from "react-router-dom";
export default function WallpaperListItem(wallpaper) {
  return (
    <>
      <div className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li>
                  <Link href="single-product.html">
                    <i className="fa fa-eye"></i>
                  </Link>
                </li>
                <li>
                  <Link href="single-product.html">
                    <i className="fa fa-star"></i>
                  </Link>
                </li>
                <li>
                  <Link href="single-product.html">
                    <i className="fa fa-shopping-cart"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <img src={wallpaper.image} alt="" />
          </div>
          <div className="down-content">
            <h4>{wallpaper.title}</h4>
            <span>{wallpaper.theme}</span>
            <ul className="stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
