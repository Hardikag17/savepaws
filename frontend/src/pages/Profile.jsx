import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/profile.css";

library.add(fab);

export default function Profile() {
  return (
    <div className="profile-box container">
      <div className="profile container ">
        <div
          className="profile-img "
          style={{ backgroundColor: "antiquewhite" }}
        >
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
            alt="placeholder profile pic"
            width="200"
            height="200"
            className="rounded-circle "
          />
          <button
            onClick={() => console.log("Profile image edit")}
            className="btn edit "
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
        <div className="details">
          <div className="personal-details">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <h1>Personal</h1>
              </div>
              <div>
                <a
                  style={{ fontSize: "14px" }}
                  href="/addpet"
                  className="btn btn-success btn-lg banner-btn "
                >
                  Add Pet
                </a>
              </div>
            </div>
            <hr />
            <div classNameName="personal-details-content">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User's Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  disabled
                />
                <span
                  role="button"
                  className="input-group-text cursor-pointer"
                  id="basic-addon2"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User's email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Address:</span>
                <textarea
                  className="form-control"
                  aria-label="Address:"
                  disabled
                ></textarea>
              </div>
              <div className="input-group mb-3 ">
                <span className="input-group-text">+91</span>
                <input
                  className="form-control"
                  aria-label="Mobile:"
                  disabled
                ></input>
                <span
                  role="button"
                  className="input-group-text cursor-pointer"
                  id="basic-addon2"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
              </div>
              <div className="input-group mb-3 ">
                <span className="input-group-text">City:</span>
                <input
                  className="form-control"
                  aria-label="City"
                  disabled
                ></input>
                <span
                  role="button"
                  className="input-group-text cursor-pointer"
                  id="basic-addon2"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                &nbsp; &nbsp;
                <span className="input-group-text">State:</span>
                <input
                  className="form-control"
                  aria-label="State"
                  disabled
                ></input>
                <span
                  role="button"
                  className="input-group-text cursor-pointer"
                  id="basic-addon2"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                &nbsp; &nbsp;
                <span className="input-group-text" disabled>
                  Pincode:
                </span>
                <input
                  className="form-control"
                  aria-label="Pincode"
                  disabled
                ></input>
                <span
                  role="button"
                  className="input-group-text cursor-pointer"
                  id="basic-addon2"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="activity container">
        <h1>Recent Activity</h1>
        <hr />
        <div>Here is the previous post cards.</div>
        <hr />
      </div>
    </div>
  );
}
