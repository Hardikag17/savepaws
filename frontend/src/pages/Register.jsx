import { useState } from "react";
import axios from "axios";
import "../styles/register.css";
import { API_ROOT } from "../api-config";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const newUser = async () => {
    try {
      const res = await axios.post(`${API_ROOT}/user/register`, { user });
      console.log(res.status, res.data);
      if (res.status === 200) navigate("/login");
    } catch (error) {
      console.log("error");
      setError(error);
    }
  };

  return (
    <div id="Register" className="container-fluid m-0 p-0 d-flex">
      <div className="image-div d-none d-md-block">
        <img
          className="img-fluid mx-auto h-100"
          src="../assets/register/login.jpg"
          alt="animal help"
        />
      </div>
      <div className="content-div container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
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
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    type="text"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form3Example1cg">
                    Your Name
                  </label>
                </div>

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

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form3Example4cdg">
                    Repeat your password
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    name="terms"
                    onChange={(e) => setCheck(e.target.checked)}
                  />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    onClick={newUser}
                    className="btn btn-success btn-block btn-lg gradient-custom-4 "
                  >
                    Register
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?
                  <a href="/login" className="fw-bold text-body">
                    <u>Login here</u>
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
