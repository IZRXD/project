export default function Home() {
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>Best New wallpapers</h2>
        <h3>Best New wallpapers</h3>
      </div>
      {/* <img src="./images/four_slider_img01.png" alt="hero" /> */}

      <div id="home-page">
        <h1>Latest Wallpapers</h1>

        <div className="wallpaper">
          <div className="image-wrap">
            <img src="./images/CoverFire.png" />
          </div>
          <h3>Cover Fire</h3>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div className="data-buttons">
            <a href="#" className="btn details-btn">
              Details
            </a>
          </div>
        </div>

        <p className="no-articles">No wallpapers yet</p>
      </div>
    </section>
  );
}
