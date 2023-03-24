import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/userContext";
import Card from "./card";
import "../styles/searchOverlay.css";

export default function SearchOverlay({ Pets, searchText }) {
  const { state, setState } = useContext(UserContext);

  return (
    <div id="Overlay" className=" w-100 h-100 absolute overlay z-100 px-5 py-2">
      <b>
        <h5 style={{ color: "grey", fontStyle: "italic" }}>
          Serach results for: {searchText}{" "}
        </h5>
      </b>
      <div className=" d-flex flex-wrap justify-content-center">
        {Pets?.response?.map((element, key) => {
          return (
            <div key={key}>
              <Card
                name={element.Name}
                description={element.description}
                rescuerId={element.RescuerID}
                PetID={element.PetID}
                comments=" 5"
                postedOn="4/3/2023"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
