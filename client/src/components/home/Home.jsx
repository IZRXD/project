
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Oasis</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-3">
              Amazing places to visit ,that are like out if 
            </h2>
            <h3 className="text-white-50 mx-auto mt-2 mb-5"> DREAMS
            </h3>
            <Link className="btn btn-primary" to="/places">
              get started with your adventure
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
