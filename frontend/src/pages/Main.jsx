import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "../components/card";
import "../styles/Main.css";
import PetView from "./PetView";
import SideBar from "../components/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { getPets } from "../utils/pets";
import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import LoadingCard from "../components/loadingCard";

library.add(fab);
export default function Main() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [card, setCard] = useState(0);
  const [page, setPage] = useState(1);
  const [element, setElement] = useState();
  const [isLoading, setLoading] = useState(true);
  const [url, seturl] = useState();
  const [filter, setFilter] = useState({
    maxAge: 100,
    minAge: 0,
    gender: null,
    breed: null,
    health: null,
  });

  // console.log("In main..", filter);

  useState(() => {
    if (filter.gender) {
      seturl();
      getPets(page, url).then((res) => console.log(res));
    }
  }, [filter]);

  // const getPets = (filter) => {
  //   console.log("change", filter);
  // const url = `http://localhost:9000/pets?page=${page}&&minAge=${filter.minAge}&&maxAge=${filter.maxAge}`;
  // console.log(filter);
  // if (filter.gender > 0) {
  //   console.log("here...");
  //   url += `&&gender=${filter.gender}`;
  // }

  // if (filter.breed > 0) {
  //   url += `&&breed=${filter.breed}`;
  // }

  // if (filter.health > 0) {
  //   url += `&&health=${filter.health}`;
  // }

  // const res = await axios.get(
  //   `http://localhost:9000/pets?page=${page}&&minAge=${filter.minAge}&&maxAge=${filter.maxAge}`
  // );

  // const res = await axios.get(url);
  //setPosts(res.data.response);
  //setLoading(false);
  // };

  const showCard = (element, value) => {
    setCard(value + 1);
    setElement(element);
  };

  // useEffect(() => {
  //   getPets();
  // }, [filter]);

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
  // console.log("In main...", filter);
  return (
    <div id="Main" style={{ backgroundColor: "#FFF", height: "100%" }}>
      {card === 0 ? (
        <div className="dashboard">
          <div className="filterOptions">
            <SideBar
              filter={filter}
              setFilter={setFilter}
              getPets={getPets()}
            />
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
