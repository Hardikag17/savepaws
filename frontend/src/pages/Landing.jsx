import "../styles/Landing.css";
import LoadingCard from "../components/loadingCard";
import Card from "../components/card";
import React, { useState, useEffect } from "react";
import Map from "./Map";
import axios from "axios";
import { API_ROOT } from "../api-config";
import { Link } from "react-router-dom";

export default function Landing() {
  const [tab, setTab] = useState(0);
  const [recentpost, setrecentpost] = useState([]);
  const [updatepost, setupdatepost] = useState([]);
  const [updateisLoading, setupdateLoading] = useState(false);
  const [recentisLoading, setrecentLoading] = useState(true);

  const dummyCards = [...Array(3)].map((_, index) => (
    <LoadingCard key={index} />
  ));

  const [userLocation, setUserLocation] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const nearByPets = async () => {
    try {
      const pets = await axios.get(
        `${API_ROOT}/pets?latitude=${userLocation[0]}&longitude=${userLocation[1]}`
      );
      // console.log(pets.data.response);
      setPets(pets.data.response);
    } catch (err) {
      console.log("Something went wrong!!!");
    }
  };

  const recentAddedPets = async () => {
    try {
      const res = await axios.get(`${API_ROOT}/pets/recentAddedPets`);
      // console.log("Recent Added", res.data);
      setrecentpost(res.data);
      setrecentLoading(false);
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  const recentcards = recentpost.map((element, key) => {
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

  const recentUpdatedPets = async (req, res) => {
    try {
      const res = await axios.get(`${API_ROOT}/pets/recentUpdatedPets`);
      console.log("Updated", res.data);
      setupdatepost(res.data);
      setupdateLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updatedCards = updatepost.map((element, key) => {
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

  const tabs = [
    { state: 0, value: recentisLoading ? dummyCards : recentcards },
    { state: 1, value: updateisLoading ? dummyCards : updatedCards },
    { state: 2, value: dummyCards },
  ];

  useEffect(() => {
    nearByPets();
    recentAddedPets();
    recentUpdatedPets();
  }, [userLocation]);

  return (
    <div className=" container-fluid ">
      <div className="Landing container-fluid border border-3 border-success shadow-lg my-4 rounded">
        {/* Banner div */}
        <div class="banner-div ps-4">
          <h1>Paws Adoption</h1>
          <h3>Everyone can pass by, but not everyone can stop and help.</h3>
          <h2>Adopt, don't shop.</h2>
          <h3>
            We inspire and enpower communities to make difference in the lives
            of animals. Find your new best friend and give a pet a loving home.
          </h3>
          <a
            href="/home"
            class="btn btn-success btn-lg banner-btn mt-3 text-white"
          >
            Find a buddy
          </a>
        </div>
      </div>
      <div className=" container-fluid content-cards">
        <div className=" d-flex flex justify-content-center container lg:w-50 w-100 rounded py-1 bg-light">
          <button
            onClick={() => {
              setTab(0);
            }}
            class="btn btn-light btn-lg text-black  lg:mx-3 mx-0"
          >
            <b> New Cuties</b>
          </button>
          <button
            onClick={() => setTab(1)}
            class="btn btn-light btn-lg text-black mx-3"
          >
            <b>Recently loved</b>
          </button>

          <button
            onClick={() => setTab(2)}
            class="btn btn-light btn-lg text-black mx-3"
          >
            <b>Our '23 Goals</b>
          </button>
        </div>
        <div className=" d-flex flex justify-content-center my-5">
          {tabs[tab].value}
        </div>
      </div>
      {/* <div className=" flex container-fluid content-help d-flex w-100 justify-content-between m-0">
        <div className=" help-text">Text</div>
        <div className="help-img rounded"></div>
      </div> */}
      <br />
      <h4 className="d-flex flex justify-context-center">
        <i>- Find pets near your location -</i>
      </h4>
      <br />

      {userLocation && pets.length > 0 ? (
        <Map userLocation={userLocation} pets={pets} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
