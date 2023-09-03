function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark py-0">
      <div className="container d-flex justify-content-between bg-dark">
        <a className="navbar-brand" href="#">
          <img src="favicon.ico" alt="" width="50px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#solutions">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">
                Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#expertise">
                Expertise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-center mx-2 d-none d-md-block">
            {" "}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
