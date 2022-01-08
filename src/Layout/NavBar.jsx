import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="https://austin-and-emily-creative.s3.us-east-2.amazonaws.com/aec-img/black%20transparent.png"
            alt="Austin + Emily"
            width="200px;"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav menu-right ml-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/films" className="nav-link">Films</Link>
            <Link to="/investment" className="nav-link">Investment</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}