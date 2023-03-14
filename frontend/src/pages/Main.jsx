import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "../components/card";
import "../styles/Main.css";
import PetView from "./PetView";
import SideBar from "../components/sidebar";
export default function Main() {
  const [posts, setPosts] = useState([]);
  const [card, setCard] = useState(0);

  const getPets = useCallback(async () => {
    const res = await axios.get("http://localhost:9000/pets");
    setPosts(res.data.response);
    console.log(posts);
  }, []);

  const showCard = (value) => {
    setCard(value + 1);
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
            <div className=" align-self-end me-5">
              <h5>Sort By</h5>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              {posts.map((element, key) => {
                return (
                  <div key={key} onClick={() => showCard(key)}>
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
          </div>
        </div>
      ) : (
        <div>
          <PetView />
        </div>
      )}
    </div>
  );
}
