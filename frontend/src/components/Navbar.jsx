import { useState, useContext } from "react";
import { UserContext } from "../utils/userContext";

export default function Navbar() {
  const { state } = useContext(UserContext);

  const notLoggedIn = (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary z-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img alt="logo" src="../assets/brand/logo.png" height="20" />
            <b> Paws Adoption</b>
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
                <a className="nav-link active" href="/home">
                  Adopt
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Shop
                </a>
              </li> */}
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
                <a href="/login" className="nav-link active">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  const LoggedIn = (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary z-5">
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
                <a className="nav-link active" href="/home">
                  Adopt
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Shop
                </a>
              </li> */}
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
                <a className="nav-link active" href="/">
                  Chat
                </a>
              </li>
              <li className=" px-2 cursor-pointer dropdown">
                <img
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="40"
                  height="40"
                  className="rounded-circle dropdown-toggle"
                  alt="Placeholder profile pic"
                />
                <ul class="dropdown-menu dropdown-menu-end text-center">
                  <li>
                    <a class="dropdown-item" href="/addpet">
                      Add Pet
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  return !state.user ? LoggedIn : notLoggedIn;
}
