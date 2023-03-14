import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "../components/card";
import "../styles/Main.css";
import PetView from "./PetView";

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
        <div className="d-flex">
          <div className="filterOptions p-2">This is a filterOptions</div>
          <div className="cards d-flex flex-column">
            <div>
              <h3>This is cards misc bar</h3>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              {posts.map((element, key) => {
                return (
                  <div id={key} onClick={() => showCard(key)}>
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
