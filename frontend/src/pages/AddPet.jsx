import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/addPet.css";

library.add(fab);

export default function AddPet() {
  return (
    <div className="container p-2 ">
      <form className="add-pet">
        <div
          className="d-flex flex-row-reverse me-2"
          style={{ color: "green" }}
        >
          <h1>
            <b>
              <img width="60" height="60" src="/assets/icons/cute.png" /> Help a
              buddy
            </b>
          </h1>
        </div>
        <h6>* Give details to best of your knowledge</h6>
        <div>
          <b>
            <h3>Pet Details</h3>
          </b>
          <hr />
          <div className="details">
            {/* Text Details */}

            <div className=" text-details">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet's Name"
                  aria-label="Name"
                  aria-describedby="basic-addon2"
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg: Dog, Cat etc"
                  aria-label="Type"
                  aria-describedby="basic-addon2"
                  disabled
                />
              </div>
              <div className="input-group mb-3  cursor-pointer dropdown">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Breed's Name"
                  aria-label="Breed name"
                  aria-describedby="basic-addon2"
                  disabled
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle"
                  style={{ fontSize: "15px" }}
                  type="submit"
                >
                  Select
                </button>
                <ul class="dropdown-menu dropdown-menu-start text-center">
                  <li>
                    <a class="dropdown-item" href="#">
                      Husky
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Labra
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Himalyan
                    </a>
                  </li>
                </ul>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Description:</span>
                <textarea
                  rows="3"
                  className="form-control"
                  aria-label="description:"
                  disabled
                ></textarea>
              </div>
              <div className=" pt-2">
                <b>
                  <h3>
                    Health, Please tell if buddy is injured or need urgent care
                  </h3>
                </b>
                <hr />
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Status"
                    aria-label="health status"
                    aria-describedby="basic-addon2"
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    id="basic-addon2"
                  >
                    Healthy
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    id="basic-addon2"
                  >
                    Minor Injury
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    id="basic-addon2"
                  >
                    Serious Injury
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    id="basic-addon2"
                  >
                    Not Specified
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vaccination"
                    aria-label="vaccination status"
                    aria-describedby="basic-addon2"
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    id="basic-addon2"
                  >
                    Yes
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    id="basic-addon2"
                  >
                    No
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    id="basic-addon2"
                  >
                    Not Idea
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sterilized"
                    aria-label="Sterilized status"
                    aria-describedby="basic-addon2"
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    id="basic-addon2"
                  >
                    Yes
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    id="basic-addon2"
                  >
                    No
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    id="basic-addon2"
                  >
                    Not Idea
                  </span>
                </div>
              </div>
              <div>
                <b>
                  <h3>
                    Where? (Please be as specific as possible incase of strays)
                  </h3>
                </b>
                <hr />
                <div className="input-group mb-3">
                  <span className="input-group-text">Address:</span>
                  <textarea
                    rows="3"
                    className="form-control"
                    aria-label="address:"
                    disabled
                  ></textarea>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer"
                    id="basic-addon2"
                  >
                    Click me &nbsp; <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                </div>
                <div>
                  <h6>
                    * City, State, Pincode - (auto fill using geolocation)
                  </h6>
                  <div className="input-group mb-3 ">
                    <span className="input-group-text">City:</span>
                    <input
                      className="form-control"
                      aria-label="City"
                      disabled
                    ></input>
                    &nbsp; &nbsp;
                    <span className="input-group-text">State:</span>
                    <input
                      className="form-control"
                      aria-label="State"
                      disabled
                    ></input>
                    &nbsp; &nbsp;
                    <span className="input-group-text" disabled>
                      Pincode:
                    </span>
                    <input
                      className="form-control"
                      aria-label="Pincode"
                      disabled
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            {/* Images */}
            <div className="imgs">
              <div className="insert-img">
                <h5>
                  5 max in form of grid with remove button on each one of them
                </h5>
              </div>
              <div class="alert alert-success my-2" role="alert">
                Color, Doesn't matter, Period!
              </div>
            </div>
          </div>
        </div>
        {/* Submit */}
        <div className=" d-flex flex-row justify-content-between align-items-center pt-5">
          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              name="terms"
            />
            <label className="form-check-label" for="form2Example3g">
              I agree all statements in
              <a href="#!" className="text-body">
                <u>Terms of service</u>
              </a>
            </label>
          </div>
          <a
            style={{ fontSize: "14px" }}
            href="#"
            className="btn btn-success btn-lg banner-btn "
          >
            Voila, Submit
          </a>
        </div>
      </form>
    </div>
  );
}
