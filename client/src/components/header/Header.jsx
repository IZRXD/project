import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link className="home" to="/">
          WallpapersPlay
        </Link>
      </h1>
      <nav>
        <Link to="/wallpapers">All wallpaper</Link>
        <div id="user">
          <Link to="/wallpapers/create">Create Wallpaper</Link>
          <Link to="/logout">Logout</Link>
        </div>
        <div id="guest">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}
