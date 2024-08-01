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

    // <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
    //     <div className="container">
    //         {/* <Link className="navbar-brand" to="/">
    //             <img src="/client/public/images/bg">
    //         </Link> */}
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span></span>
    //         </button>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav ml-auto">
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/home">Home</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/about">About</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/service">Service</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/portfolio">Portfolio</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/team">Team</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/testimonial">Testimonial</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/blog">Blog</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/contact">Contact</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link btn btn-primary btn-sm ml-lg-3" to="components.html">Components</Link>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
  );
}
