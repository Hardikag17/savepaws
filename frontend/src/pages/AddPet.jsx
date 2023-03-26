import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../utils/userContext";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getBreedOptions, getStatesOption } from "../utils/options";
import Select from "react-select";
import "../styles/addPet.css";
import axios from "axios";
import upload from "superagent";
import Modal from "../components/modal";

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
  const [petAddModal, setPetAddModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [breedOptions, setBreedOptions] = useState([]);
  const [statesOptions, setStatesOptions] = useState([]);

  const numbers = Array.from(new Array(20), (val, index) => index + 1);
  const [pet, setPet] = useState({
    PetID: "",
    RescuerID: localStorage.getItem("userID"),
    Name: "",
    Type: null,
    Age: null,
    Breed1: "",
    Gender: "",
    Vaccinated: null,
    Sterilized: null,
    Health: "",
    State: "",
    City: "",
    Pincode: null,
    Address: "",
    Description: "",
    PhotoAmt: null,
    Status: false,
  });

  useEffect(() => {
    getBreedOptions().then((res) => {
      setBreedOptions(res);
    });
  }, [getBreedOptions]);

  useEffect(() => {
    getStatesOption().then((res) => {
      setStatesOptions(res);
    });
  }, [getStatesOption]);

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
    data.Breed1 = pet.Breed1;
    data.Gender = pet.Gender;
    data.Vaccinated = pet.Vaccinated;
    data.Sterilized = pet.Sterilized;
    data.Health = pet.Health;
    data.PhotoAmt = selectedImages.length;
    setPet(data);
    uploadImages();
    data.PetID = pet.PetID;
    data.RescuerID = pet.RescuerID;
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
          if (err) setErrorModal(true);
          else setPet({ ...pet, PetID: res.text });
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
      if (res.status == 200) setPetAddModal(true);
      else setErrorModal(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid p-2 add-pet-container ">
      {petAddModal ? (
        <Modal
          state={petAddModal}
          text={`${pet.Name} Sucessfully added to the platform. You can access the pet details in your profile or using the search by location section.`}
        />
      ) : (
        <></>
      )}
      {errorModal ? (
        <Modal
          state={errorModal}
          text={`Error occured. Please try again later`}
        />
      ) : (
        <></>
      )}
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
                  name="Name"
                  className="form-control"
                  placeholder="* Pet's Name"
                  aria-label="Name"
                  aria-describedby="basic-addon2"
                  {...register("Name", { required: true, maxLength: 20 })}
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
                  name="Type"
                  className="form-control"
                  placeholder="* Type: Eg: 1-Dog, 2-Cat, 3-Others etc"
                  aria-label="Type"
                  aria-describedby="basic-addon2"
                  {...register("Type", { required: true, maxLength: 15 })}
                />
              </div>
              {errors.Type && (
                <div class="alert alert-danger py-0" role="alert">
                  Please give a valid input
                </div>
              )}
              <div className="input-group mb-3  cursor-pointer dropdown">
                <input
                  type="text"
                  name="Breed1"
                  className="form-control"
                  placeholder="Breed's Name"
                  aria-label="Breed name"
                  aria-describedby="basic-addon2"
                  disabled
                  value={`Breed: ${pet.Breed1}`}
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle z-0"
                  style={{ fontSize: "15px" }}
                >
                  Select
                </button>
                <ul className="dropdown-menu dropdown-menu-start text-center">
                  <li
                    onClick={() => setPet({ ...pet, Breed1: "Husky" })}
                    {...register("Breed1", { required: true })}
                    className="dropdown-item"
                  >
                    Husky
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, Breed1: "Labra" })}
                    {...register("Breed1", { required: true })}
                    className="dropdown-item"
                  >
                    Labra
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, Breed1: "Himalayan" })}
                    {...register("Breed1", { required: true })}
                    className="dropdown-item"
                  >
                    Himalyan
                  </li>
                </ul>
                &nbsp; &nbsp;
                <input
                  type="text"
                  name="Gender"
                  className="form-control"
                  placeholder="Gender"
                  aria-label="Gender"
                  aria-describedby="basic-addon2"
                  value={`Gender: ${pet.Gender}`}
                  disabled
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle z-0"
                  style={{ fontSize: "15px" }}
                >
                  Select
                </button>
                <ul className="dropdown-menu dropdown-menu-start text-center">
                  <li
                    onClick={() => setPet({ ...pet, Gender: "Male" })}
                    {...register("Gender", { required: true })}
                    className="dropdown-item"
                  >
                    Male
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, Gender: "Female" })}
                    {...register("Gender", { required: true })}
                    className="dropdown-item"
                  >
                    Female
                  </li>
                  <li
                    onClick={() => setPet({ ...pet, Gender: "Not Known" })}
                    {...register("Gender", { required: true })}
                    className="dropdown-item"
                  >
                    Not Known
                  </li>
                </ul>
                &nbsp; &nbsp;
                <input
                  type="text"
                  name="Age"
                  className="form-control"
                  placeholder="Age (in months)"
                  aria-label="Age"
                  aria-describedby="basic-addon2"
                  value={`Age: ${pet.Age}`}
                  disabled
                />
                <button
                  data-bs-toggle="dropdown"
                  className="btn btn-success btn-lg banner-btn dropdown-toggle z-0"
                  style={{ fontSize: "15px" }}
                >
                  Select
                </button>
                <ul className="dropdown-menu dropdown-menu-start text-center">
                  {numbers.map((year, index) => {
                    return (
                      <li
                        key={`year${index}`}
                        onClick={() => setPet({ ...pet, Age: year })}
                        {...register("Age", { required: true })}
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
                  name="Description"
                  className="form-control"
                  aria-label="Description:"
                  onChange={(e) =>
                    setPet({ ...pet, Description: e.target.value })
                  }
                  {...register("Description", {
                    required: true,
                    maxLength: 100,
                    minLength: 30,
                  })}
                ></textarea>
              </div>
              {errors.Description && (
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
                    name="Health"
                    className="form-control"
                    placeholder="Status"
                    aria-label="Health status"
                    aria-describedby="basic-addon2"
                    value={`Status: ${pet.Health}`}
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, Health: "Healthy" })}
                    id="basic-addon2"
                  >
                    Healthy
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, Health: "Minor Injury" })}
                    id="basic-addon2"
                  >
                    Minor Injury
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, Health: "Serious Injury" })}
                    id="basic-addon2"
                  >
                    Serious Injury
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer lg:px-3"
                    onClick={() => setPet({ ...pet, Health: "Not Specified" })}
                    id="basic-addon2"
                  >
                    Not Specified
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="Vaccinated"
                    className="form-control"
                    placeholder="Vaccinated"
                    aria-label="Vaccinated status"
                    aria-describedby="basic-addon2"
                    value={
                      pet.Vaccinated === 1
                        ? "Vaccination: Yes"
                        : pet.Vaccinated === 2
                        ? "Vaccination: No"
                        : "Vaccination: No Idea"
                    }
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, Vaccinated: 1 })}
                    id="basic-addon2"
                  >
                    Yes
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, Vaccinated: 2 })}
                    id="basic-addon2"
                  >
                    No
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, Vaccinated: 3 })}
                    id="basic-addon2"
                  >
                    No Idea
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="Sterilized"
                    placeholder="Sterilized"
                    aria-label="Sterilized status"
                    aria-describedby="basic-addon2"
                    value={
                      pet.Sterilized === 1
                        ? "Sterilized: Yes"
                        : pet.Sterilized === 2
                        ? "Sterilized: No"
                        : "Sterilized: No Idea"
                    }
                    disabled
                  />
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, Sterilized: 1 })}
                    id="basic-addon2"
                  >
                    Yes
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, Sterilized: 2 })}
                    id="basic-addon2"
                  >
                    No
                  </span>
                  <span
                    role="button"
                    className="input-group-text cursor-pointer px-5"
                    onClick={() => setPet({ ...pet, Sterilized: 3 })}
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
                    name="Address"
                    aria-label="Address:"
                    {...register("Address", {
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
                {errors.Address && (
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
                      name="City"
                      type="text"
                      aria-label="City"
                      {...register("City", {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                    &nbsp; &nbsp;
                    <span className="input-group-text">State:</span>
                    <input
                      className="form-control"
                      type="text"
                      name="State"
                      aria-label="State"
                      {...register("State", {
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
                      {...register("Pincode", {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </div>
                </div>
                {(errors.City || errors.State || errors.Pincode) && (
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
                    if (e.target.files.length !== 4)
                      alert("You must upload 4 images");
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
