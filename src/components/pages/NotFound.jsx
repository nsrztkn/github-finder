import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="mb-8 text-7xl font-bold">404 - Not Found</h1>
          <p className="mb-8 text-3xl">
            Sorry, the page you are looking for does not exist.
          </p>

          <Link to="/" className="btn btn-primary">
            <FaHome className=" mr-2"></FaHome>
            Go HomePage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
