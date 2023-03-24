import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../utils/userContext";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/addPet.css";
import axios from "axios";
import upload from "superagent";

import { API_ROOT } from "../api-config";
const elephant = require("../icons-profile/elephant.jpg");

library.add(fab);

export default function AddPet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  const { state } = useContext(UserContext);
  const [preview, setPreview] = useState([]);

  const numbers = Array.from(new Array(20), (val, index) => index + 1);
  const [pet, setPet] = useState({
    petID: "",
    rescuerID: "",
    name: "",
    type: null,
    age: null,
    breed: "",
    gender: "",
    vaccinated: null,
    sterilized: null,
    health: "",
    state: "",
    city: "",
    pincode: null,
    address: "",
    description: "",
    photoamt: null,
    status: false,
  });

  useEffect(() => {
    if (!selectedImages[0]) {
      setPreview([elephant, elephant, elephant, elephant]);
      return;
    }

    setPreview([]);
    [...selectedImages].forEach((element) => {
      const objectUrl = URL.createObjectURL(element);
      setPreview((preview) => [...preview, objectUrl]);
    });

    // free memory when ever this component is unmounted
    //return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImages]);

  const onSubmit = (data) => {
    console.log(data);
    data.breed = pet.breed;
    data.gender = pet.gender;
    data.vaccinated = pet.vaccinated;
    data.sterilized = pet.sterilized;
    data.health = pet.health;
    data.photoamt = selectedImages.length;
    setPet(data);
    uploadImages();
    data.petID = pet.petID;
    data.rescuerID = state.userID;
    newPetData(data);
  };

  const uploadImages = async () => {
    // uploading images to aws-s3
    try {
      upload
        .post(`${API_ROOT}/pets/upload`)
        .attach("files", selectedImages[0])
        .attach("files", selectedImages[1])
        .attach("files", selectedImages[2])
        .attach("files", selectedImages[3])
        .end((err, res) => {
          if (err) alert(err);
          setPet({ ...pet, petID: res.text });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const newPetData = async (data) => {
    // add new pet
    try {
      const res = await axios.post(`${API_ROOT}/pets/addpet`, { data });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid p-2 add-pet-container ">
      <form onSubmit={handleSubmit(onSubmit)} className="add-pet">
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
                  name="name"
                  className="form-control"
                  placeholder="* Pet's Name"
                  aria-label="Name"
                  aria-describedby="basic-addon2"
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </div>
              {errors.name && (
                <div className="alert alert-danger py-0" role="alert">
                  Name can not be more than 20 characters
                </div>
              )}
              <div className="input-group mb-3">
                <input
                  type="number"
                  name="type"
                  className="form-control"
                  placeholder="* Type: Eg: Dog, Cat etc"
                  aria-label="Type"
                  aria-describedby="basic-addon2"
                  {...register("type", { required: true, maxLength: 15 })}
                />
              </div>
              {errors.type && (
                <div class="alert alert-danger py-0" role="alert">
                  Please give a valid input
                </div>
              )}
              <div className="input-group mb-3  cursor-pointer dropdown">
                <input
                  type="text"
                  name="breed"
                  className="form-control"
                  placeholder="Breed's Name"
                  aria-label="Breed name"
                  aria-describedby="basic-addon2"
                  disabled
                  value={`Breed: ${pet.breed}`}
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle"
                  style={{ fontSize: "15px" }}
                >
                  Select
                </button>
                <ul className="dropdown-menu dropdown-menu-start text-center">
                  <li
                    onClick={() => setPet({ ...pet, breed: "Husky" })}
                    {...register("breed", { required: true })}
                    className="dropdown-item"
                  >
                    Husky
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, breed: "Labra" })}
                    {...register("breed", { required: true })}
                    className="dropdown-item"
                  >
                    Labra
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, breed: "Himalayan" })}
                    {...register("breed", { required: true })}
                    className="dropdown-item"
                  >
                    Himalyan
                  </li>
                </ul>
                &nbsp; &nbsp;
                <input
                  type="text"
                  name="gender"
                  className="form-control"
                  placeholder="Gender"
                  aria-label="Gender"
                  aria-describedby="basic-addon2"
                  value={`Gender: ${pet.gender}`}
                  disabled
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle"
                  style={{ fontSize: "15px" }}
                >
                  Select
                </button>
                <ul className="dropdown-menu dropdown-menu-start text-center">
                  <li
                    onClick={() => setPet({ ...pet, gender: "Male" })}
                    {...register("gender", { required: true })}
                    className="dropdown-item"
                  >
                    Male
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, gender: "Female" })}
                    {...register("gender", { required: true })}
                    className="dropdown-item"
                  >
                    Female
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, gender: "Not Known" })}
                    {...register("gender", { required: true })}
                    className="dropdown-item"
                  >
                    Not Known
                  </li>
                </ul>
                &nbsp; &nbsp;
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  placeholder="Age"
                  aria-label="Age"
                  aria-describedby="basic-addon2"
                  value={`Age: ${pet.age}`}
                  disabled
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle"
                  style={{ fontSize: "15px" }}
                >
                  Select
                </button>
                <ul className="dropdown-menu dropdown-menu-start text-center">
                  {numbers.map((year, index) => {
                    return (
                      <li
                        key={`year${index}`}
                        onClick={() => setPet({ ...pet, age: year })}
                        {...register("age", { required: true })}
                        value={year}
                        className="dropdown-item"
                      >
                        {year}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Description:</span>
                <textarea
                  rows="3"
                  name="description"
                  className="form-control"
                  aria-label="description:"
                  onChange={(e) =>
                    setPet({ ...pet, description: e.target.value })
                  }
                  {...register("description", {
                    required: true,
                    maxLength: 100,
                    minLength: 30,
                  })}
                ></textarea>
              </div>
              {errors.description && (
                <div className="alert alert-danger py-0" role="alert">
                  Requires min 30 characters
                </div>
              )}
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
                    name="health"
                    className="form-control"
                    placeholder="Status"
                    aria-label="health status"
                    aria-describedby="basic-addon2"
                    value={`Status: ${pet.health}`}
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, health: "Healthy" })}
                    id="basic-addon2"
                  >
                    Healthy
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, health: "Minor Injury" })}
                    id="basic-addon2"
                  >
                    Minor Injury
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, health: "Serious Injury" })}
                    id="basic-addon2"
                  >
                    Serious Injury
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, health: "Not Specified" })}
                    id="basic-addon2"
                  >
                    Not Specified
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="vaccination"
                    className="form-control"
                    placeholder="Vaccination"
                    aria-label="vaccination status"
                    aria-describedby="basic-addon2"
                    value={
                      pet.vaccinated === 1
                        ? "Vaccination: Yes"
                        : pet.vaccinated === 2
                        ? "Vaccination: No"
                        : "Vaccination: No Idea"
                    }
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, vaccinated: 1 })}
                    id="basic-addon2"
                  >
                    Yes
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, vaccinated: 2 })}
                    id="basic-addon2"
                  >
                    No
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, vaccinated: 3 })}
                    id="basic-addon2"
                  >
                    No Idea
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="sterilized"
                    placeholder="Sterilized"
                    aria-label="Sterilized status"
                    aria-describedby="basic-addon2"
                    value={
                      pet.sterilized === 1
                        ? "Sterilized: Yes"
                        : pet.sterilized === 2
                        ? "Sterilized: No"
                        : "Sterilized: No Idea"
                    }
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, sterilized: 1 })}
                    id="basic-addon2"
                  >
                    Yes
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, sterilized: 2 })}
                    id="basic-addon2"
                  >
                    No
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, sterilized: 3 })}
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
                  <span className="input-group-text">* Address:</span>
                  <textarea
                    rows="3"
                    className="form-control"
                    name="address"
                    aria-label="address:"
                    {...register("address", {
                      required: true,
                      maxLength: 80,
                      minLength: 20,
                    })}
                  ></textarea>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer"
                    id="basic-addon2"
                  >
                    Click me &nbsp; <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                </div>
                {errors.address && (
                  <div className="alert alert-danger py-0" role="alert">
                    Common, This is a mandatory field
                  </div>
                )}
                <div>
                  <h6>
                    * City, State, Pincode - (auto fill using geolocation)
                  </h6>
                  <div className="input-group mb-3 ">
                    <span className="input-group-text">City:</span>
                    <input
                      className="form-control"
                      name="city"
                      type="text"
                      aria-label="city"
                      {...register("city", {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                    &nbsp; &nbsp;
                    <span className="input-group-text">State:</span>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      aria-label="State"
                      {...register("state", {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                    &nbsp; &nbsp;
                    <span className="input-group-text">Pincode:</span>
                    <input
                      className="form-control"
                      type="number"
                      aria-label="Pincode"
                      {...register("pincode", {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </div>
                </div>
                {(errors.city || errors.state || errors.pincode) && (
                  <div className="alert alert-danger py-0" role="alert">
                    Please fill the above row
                  </div>
                )}
              </div>
            </div>
            {/* Images */}
            <div className="imgs">
              <div className="image-upload container text-center">
                <label for="file-input" className="img-div">
                  <div class="row border border-dark">
                    <div class="col">
                      <img
                        src={preview[0]}
                        height={260}
                        class="w-100 shadow-1-strong p-2 pe-0 img-1"
                        alt="Pet's pics (max-4)"
                      />
                      <img
                        src={preview[1]}
                        class="w-100 shadow-1-strong p-2 pb-0 img-2"
                        alt="Pet's pics (max-4)"
                      />
                    </div>
                    <div class="col">
                      <img
                        src={preview[2]}
                        class="w-100 shadow-1-strong p-2 img-3"
                        alt="Pet's pics (max-4)"
                      />
                      <img
                        src={preview[3]}
                        height={260}
                        class="w-100  shadow-1-strong p-2 pt-0 ps-0 img-4"
                        alt="Pet's pics (max-4)"
                      />
                    </div>
                  </div>
                </label>
                <input
                  onChange={(e) => {
                    if (e.target.files.length > 4)
                      alert("You can upload only 4 images");
                    else {
                      if (e.target.files?.[0]) {
                        setSelectedImages(e.target.files);
                      }
                    }
                  }}
                  id="file-input"
                  multiple
                  name="files"
                  type="file"
                />
              </div>
              {/* <div className="alert alert-success my-2" role="alert">
                Color, Doesn't matter!
              </div> */}
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
          <button
            style={{ fontSize: "14px" }}
            type="submit"
            className="btn btn-success btn-lg banner-btn "
          >
            Voila, Submit
          </button>
        </div>
      </form>
    </div>
  );
}
