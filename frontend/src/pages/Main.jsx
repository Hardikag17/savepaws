import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "../components/card";
import "../styles/Main.css";
import PetView from "./PetView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import LoadingCard from "../components/loadingCard";
import "../styles/sidebar.css";
import { getBreedOptions } from "../utils/options";
import Select from "react-select";
import MultiRangeSlider from "../components/MultiRangeSlider";

library.add(fab);
export default function Main() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [card, setCard] = useState(0);
  const [page, setPage] = useState(1);
  const [element, setElement] = useState();
  const [isLoading, setLoading] = useState(true);
  const [breedOpen, setbreedOpen] = useState(false);
  const [genderOpen, setgenderOpen] = useState(false);
  const [healthOpen, sethealthopen] = useState(false);
  const [ageOpen, setageOpen] = useState(false);
  const [breedOptions, setBreedOptions] = useState([]);
  const [min, setmin] = useState(1);
  const [max, setmax] = useState(100);
  const [filter, setFilter] = useState({
    maxAge: 100,
    minAge: 1,
    gender: null,
    breed: null,
    health: null,
  });

  const getPets = useCallback(async () => {
    console.log(filter);
    var url = `http://localhost:9000/pets?page=${page}&&minAge=${filter.minAge}&&maxAge=${filter.maxAge}`;
    if (filter.gender > 0) {
      url += `&&gender=${filter.gender}`;
    }

    if (filter.breed > 0) {
      url += `&&breed=${filter.breed}`;
    }

    if (filter.health > 0) {
      url += `&&health=${filter.health}`;
    }

    console.log("url:", url);

    let res = await axios.get(url);

    setPosts(res.data.response);
    setLoading(false);

    console.log("posts", posts);
  }, [filter, page, posts]);

  useState(() => {
    getPets();
  }, [filter]);

  const dummyCards = [...Array(12)].map((_, index) => (
    <LoadingCard key={index} />
  ));

  const cards = posts.map((element, key) => {
    return (
      <Link to={`/petview/${element.PetID}`}>
        <div key={key}>
          <Card
            name={element.Name}
            description={element.description}
            rescuerId={element.RescuerID}
            PetID={element.PetID}
            comments={element.social.length}
            postedOn={
              element.createdAt
                ? new Date(element.createdAt).toLocaleDateString()
                : "01/03/2023"
            }
          />
        </div>
      </Link>
    );
  });

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
  }, [breedOpen]);

  useEffect(() => {
    setFilter({
      ...filter,
      minAge: min,
    });
    setFilter({
      ...filter,
      maxAge: max,
    });
  }, [min, max]);

  return (
    <div id="Main" style={{ backgroundColor: "#FFF", height: "100%" }}>
      {card === 0 ? (
        <div className="dashboard">
          <div className="filterOptions">
            <div className="sidebar px-3">
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
                      onClick={() => setgenderOpen(!genderOpen)}
                    >
                      Gender
                    </a>
                    {genderOpen && (
                      <Select
                        options={genderOptions}
                        defaultValue={filter.gender}
                        placeholder="Select Gender"
                        onChange={(e) => {
                          setFilter({
                            ...filter,
                            gender: e.value,
                          });
                          let a = filter;
                          a.gender = e.value;
                          console.log(a);
                          getPets();
                        }}
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
                      onClick={() => setageOpen(!ageOpen)}
                    >
                      Age
                    </a>
                    {ageOpen && (
                      <MultiRangeSlider
                        min={min}
                        max={max}
                        onChange={({ min, max }) => {
                          if (max !== filter.maxAge || min !== filter.minAge) {
                            setFilter({
                              ...filter,
                              minAge: 0,
                              maxAge: 100,
                            });

                            let a = filter;
                            a.minAge = min;
                            a.maxAge = max;
                            console.log(a);

                            getPets();
                            setmin(min);
                            setmax(max);
                          }
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
                      onClick={() => setbreedOpen(!breedOpen)}
                    >
                      Breed
                    </a>
                    {breedOpen && (
                      <Select
                        options={breedOptions}
                        defaultValue={filter.value}
                        placeholder="Select Breed"
                        onChange={(e) => {
                          setFilter({
                            ...filter,
                            breed: e.value,
                          });
                          let a = filter;
                          a.breed = e.value;
                          console.log(a);
                          getPets();
                        }}
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
                      onClick={() => sethealthopen(!healthOpen)}
                    >
                      Health
                    </a>
                    {healthOpen && (
                      <Select
                        options={healthOptions}
                        defaultValue={filter.health}
                        placeholder="Select Health"
                        onChange={(e) => {
                          setFilter({
                            ...filter,
                            health: e.value,
                          });
                          let a = filter;
                          a.health = e.value;
                          console.log(a);
                          getPets();
                        }}
                        isSearchable={true}
                        isClearable
                        noOptionsMessage={() =>
                          "Sorry no such health type found"
                        }
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
          </div>
          <div className="cards d-flex flex-column">
            <div>
              <h5>Page no: {page}</h5>
            </div>
            <div className=" align-self-end me-5">
              <h5>Sort By</h5>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              {isLoading ? dummyCards : cards}
            </div>
            <br />
            <div className="d-flex flex-row justify-content-center align-items-center">
              <button
                onClick={() => {
                  let p = page;
                  if (p - 1 < 1) alert("Page no can not be less than 1");
                  else {
                    setPage(p - 1);
                    setLoading(true);
                    getPets();
                  }
                }}
                className="btn btn-success btn-lg banner-btn mx-2 rounded-circle"
              >
                <FontAwesomeIcon icon={faBackwardStep} />
              </button>
              <button
                onClick={() => {
                  let p = page;
                  setPage(p + 1);
                  setLoading(true);
                  getPets();
                }}
                className="btn btn-success btn-lg banner-btn mx-2 rounded-circle"
              >
                <FontAwesomeIcon icon={faForwardStep} />
              </button>
            </div>
            <br /> <br /> <br />
          </div>
        </div>
      ) : (
        <div>
          <PetView element={element} />
        </div>
      )}
    </div>
  );
}
