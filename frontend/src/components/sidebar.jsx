import "../styles/sidebar.css";
import { getBreedOptions } from "../utils/options";
import { useState, useEffect } from "react";
import Select from "react-select";
import MultiRangeSlider from "./MultiRangeSlider";
import { getPets } from "../utils/pets";

export default function SideBar({ filter, setFilter }) {
  const [breed, setbreed] = useState(null);
  const [breedOpen, setbreedOpen] = useState(false);
  const [genderOpen, setgenderOpen] = useState(false);
  const [healthOpen, sethealthopen] = useState(false);
  const [ageOpen, setageOpen] = useState(false);
  const [breedOptions, setBreedOptions] = useState([]);
  const [gender, setgender] = useState(null);
  const [health, sethealth] = useState(null);
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(20);
  const [url, seturl] = useState("");
  const genderOptions = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
    { value: 3, label: "Not Known" },
  ];

  const healthOptions = [
    { value: 1, label: "Healthy" },
    { value: 2, label: "Minor Injury" },
    { value: 3, label: "Major Injury" },
  ];

  useEffect(() => {
    getBreedOptions().then((res) => {
      setBreedOptions(res);
    });
  }, [getBreedOptions]);

  const isOpenBreed = () => {
    setbreedOpen(!breedOpen);
  };

  const isOpenGender = () => {
    setgenderOpen(!genderOpen);
  };

  const isOpenHealth = () => {
    sethealthopen(!healthOpen);
  };

  const isOpenAge = () => {
    setageOpen(!ageOpen);
  };

  const handleGenderChange = (selectedOption) => {
    setFilter({
      ...filter,
      gender: selectedOption.value,
    });
    var urlgender = url + `&&gender=${selectedOption.value}`;
    seturl(urlgender);

    getPets(1, urlgender).then((res) => console.log(res));
    seturl("");
  };

  const handleAgeChange = (min, max) => {
    setFilter({
      ...filter,
      minAge: min,
      maxAge: max,
    });
  };

  const handleBreedChange = (selectedOption) => {
    setFilter({
      ...filter,
      breed: selectedOption.value,
    });
    let urlbreed = url;
    console.log("Breed", urlbreed);

    seturl(urlbreed + `&&breed=${selectedOption.value}`);
    console.log("breed", url);
    getPets(1, url).then((res) => console.log(res));
  };

  const handleHealthChange = (selectedOption) => {
    setFilter({
      ...filter,
      health: selectedOption.value,
    });
    let urlhealth = url;
    seturl(urlhealth + `&&health=${selectedOption.value}`);
    console.log(url);
    getPets(1, url).then((res) => console.log(res));
  };

  // console.log("Here..", filter);

  return (
    <div className="sidebar">
      <div className="d-flex flex-sm-column flex-row flex-nowrap  align-items-center ">
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="filterOption1"
              onClick={isOpenGender}
            >
              Gender
            </a>
            {genderOpen && (
              <Select
                options={genderOptions}
                defaultValue={filter.gender}
                placeholder="Select Gender"
                onChange={handleGenderChange}
                isSearchable={true}
                isClearable
                noOptionsMessage={() => "Sorry no such gender found"}
                styles={{
                  control: (baseStyles, state, defaultStyles) => ({
                    ...defaultStyles,
                    ...baseStyles,
                    width: 180,
                    borderColor: state.isFocused ? "green" : "green",
                  }),
                }}
              />
            )}
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
              onClick={isOpenAge}
            >
              Age
            </a>
            {ageOpen && (
              <MultiRangeSlider
                min={min}
                max={max}
                onChange={({ min, max }) => {
                  setmin(min);
                  setmax(max);
                  // handleAgeChange(min, max);
                  // console.log(`min = ${min}, max = ${max}`);
                }}
              />
            )}
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Products"
              onClick={isOpenBreed}
            >
              Breed
            </a>
            {breedOpen && (
              <Select
                options={breedOptions}
                defaultValue={filter.value}
                placeholder="Select Breed"
                onChange={handleBreedChange}
                isSearchable={true}
                isClearable
                noOptionsMessage={() => "Sorry no such breed found"}
                styles={{
                  control: (baseStyles, state, defaultStyles) => ({
                    ...defaultStyles,
                    ...baseStyles,
                    width: 180,
                    borderColor: state.isFocused ? "green" : "green",
                  }),
                }}
              />
            )}
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Customers"
              onClick={isOpenHealth}
            >
              Health
            </a>
            {healthOpen && (
              <Select
                options={healthOptions}
                defaultValue={filter.health}
                placeholder="Select Health"
                onChange={handleHealthChange}
                isSearchable={true}
                isClearable
                noOptionsMessage={() => "Sorry no such health type found"}
                styles={{
                  control: (baseStyles, state, defaultStyles) => ({
                    ...defaultStyles,
                    ...baseStyles,
                    width: 180,
                    borderColor: state.isFocused ? "green" : "green",
                  }),
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
