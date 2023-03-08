import "../styles/login.css";
import axios from "axios";
import { useState } from "react";
import { API_ROOT } from "../api-config";

export default function Login() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const res = await axios.post(`${API_ROOT}/user/login`, {
        email: user.email,
        password: user.password,
      });
      console.log(res.status, res.data);
    } catch (error) {
      console.log("error");
      setError(error);
    }
  };

  return (
    <div id="Login" className="container-fluid m-0 p-0 d-flex">
      <div className="image-div">
        <img
          className="img-fluid mx-auto h-100"
          src="../assets/register/login.jpg"
          alt="animal help"
        />
      </div>
      <div className="content-div container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card h-100">
            <div className="card-body my-5">
              <h2 className="text-uppercase text-center mb-5">Welcome, User</h2>
              {error.length ? (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                <div></div>
              )}
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form3Example3cg">
                    Your Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form3Example4cg">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    onClick={login}
                    className="btn btn-success btn-block btn-lg"
                  >
                    Login
                  </button>
                </div>

                <h4 className="text-center my-4">OR, Login using</h4>
                <div className="form-outline mb-4">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                      style={{ fontSize: "xx-large", color: "green" }}
                    >
                      <i className="fab fa-google"></i>
                    </button>
                  </div>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Don't have an account?
                  <a href="/register" className="fw-bold text-body">
                    <u>Register here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
