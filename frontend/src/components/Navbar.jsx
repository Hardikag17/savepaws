export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img alt="logo" src="../assets/brand/logo.png" height="20" /> Paws
            Adoption
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Adopt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Shop
                </a>
              </li>
            </ul>

            <form className="d-flex mx-auto" role="search">
              <input
                className="form-control me-3"
                style={{ width: "250px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-success btn-lg banner-btn"
                style={{ fontSize: "15px" }}
                type="submit"
              >
                Search
              </button>
            </form>

            <ul className="navbar-nav mr-auto mr-2 mr-lg-0">
              <li className="nav-item">
                <a
                  href="/register"
                  className="nav-link active"
                  aria-current="page"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}