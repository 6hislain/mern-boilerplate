const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg fixed-top bg-dark"
    data-bs-theme="dark"
  >
    <div className="container">
      <a className="navbar-brand" href="#">
        MERN Boilerplate
      </a>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <i className="bi bi-code-slash me-1"></i> with
          <i className="bi bi-heart-fill text-danger mx-1"></i> by
          <a
            className="text-decoration-none"
            target="_blank"
            href="https://bio.link/6hislain"
          >
            @6hislain
          </a>
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
