import { useState } from "react";
import axios from "axios";
import Card from "../components/card";
import "../styles/Main.css";

export default function Main() {
  const [posts, setPosts] = useState([
    {
      Type: 2,
      Name: "Timmy",
      Age: 7,
      Breed1: 247,
      Breed2: 266,
      Gender: 3,
      Color1: 2,
      Color2: 4,
      Color3: 5,
      Vaccinated: 1,
      Sterilized: 1,
      Health: 1,
      Fee: 0,
      State: 41326,
      RescuerID: "df3f86a2d783512e0d863a47c55a86b7",
      Description:
        "Saya ada 2 ekor kitten untuk diberi secara PERCUMA. Semua kitten dah vaksin & deworm. Umur = 7 Bulan Jantan = 2 Ekor (Dah dimandulkan) Lokasi = Puchong Perdana Prefer untuk let go kedua2 sekali coz kitten2 nie tak pernah berpisah. Sesiapa yang berminat, boleh hubungi saya di talian 3 .",
      PetID: "0f82cea1e",
      PhotoAmt: 2,
    },
  ]);

  return (
    <div id="Main">
      <div className="cards">
        {posts.map((element, key) => {
          return (
            <div id={key}>
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
  );
}
