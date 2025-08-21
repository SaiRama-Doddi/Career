import logo from '../../src/assets/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Left Side - Logo + Title */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold fs-3" style={{ fontFamily: "'Caveat', cursive" }}>
            Wings to with
          </span>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Study Abroad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aviation Training
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career Counselling
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>

          {/* Right Side Button */}
          <div className="d-flex mt-3 mt-lg-0">
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
