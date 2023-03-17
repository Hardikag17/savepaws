import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "../components/card";
import "../styles/Main.css";
import PetView from "./PetView";
import SideBar from "../components/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab);
export default function Main() {
  const [posts, setPosts] = useState([]);
  const [card, setCard] = useState(0);
  const [page, setPage] = useState(1);
  const [element, setElement] = useState();

  const getPets = useCallback(async () => {
    const res = await axios.get(`http://localhost:9000/pets?page=${page}`);
    setPosts(res.data.response);
  }, [page]);

  const showCard = (element, value) => {
    setCard(value + 1);
    setElement(element);
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div id="Main" style={{ backgroundColor: "#FFF" }}>
      {card == 0 ? (
        <div className="dashboard">
          <div className="filterOptions">
            <SideBar />
          </div>
          <div className="cards d-flex flex-column">
            <div>
              <h5>Page no: {page}</h5>
            </div>
            <div className=" align-self-end me-5">
              <h5>Sort By</h5>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              {posts.map((element, key) => {
                return (
                  <div key={key} onClick={() => showCard(element, key)}>
                    <Card
                      name={element.Name}
                      description={element.description}
                      rescuerId={element.RescuerID}
                      comments="5"
                      postedOn="4/3/2023"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <button
                onClick={() => {
                  let p = page;
                  if (p - 1 < 1) alert("Page no can not be less than 1");
                  else {
                    setPage(p - 1);
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
                  getPets();
                }}
                className="btn btn-success btn-lg banner-btn mx-2 rounded-circle"
              >
                <FontAwesomeIcon icon={faForwardStep} />
              </button>
            </div>
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
