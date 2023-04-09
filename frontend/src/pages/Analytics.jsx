import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { getMetrics } from "../utils/analytics";
import Map from "./Map";
import axios from "axios";
import { API_ROOT } from "../api-config";
import "../styles/analytics.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Analytics() {
  const [metrics, setMetrics] = useState([]);
  useEffect(() => {
    getMetrics().then((res) => setMetrics(res));
  }, []);

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
        `${API_ROOT}/pets/getNearPets?latitude=${userLocation[0]}&&longitude=${userLocation[1]}`
      );
      setPets(pets.data);
    } catch (err) {
      console.log(err);
      console.log("Something went wrong!!!");
    }
  };

  useEffect(() => {
    nearByPets();
  });

  const data = {
    labels: [
      "total_no_of_pets",
      "no_of_pets_adopted",
      "no_of_cats",
      "no_of_dogs",
      "others",
    ],
    datasets: [
      {
        label: "total",
        data: metrics,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          //   "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          //   "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div id="analytics">
      <div className=" d-flex flex w-100 justify-content-around p-4 container-fluid ">
        <h3
          className=" px-2 btn btn-light text-success border border-success border-2 "
          style={{ fontSize: "28px" }}
        >
          <b>Pets: {metrics ? metrics[0] : <div />} </b>
        </h3>

        <h3
          className="  px-2 btn btn-light  text-success border border-success border-2"
          style={{ fontSize: "28px" }}
        >
          <b>Images: 14,500 in S3</b>
        </h3>
        <h3
          className="  px-2 btn btn-light  text-success border border-success border-2"
          style={{ fontSize: "28px" }}
        >
          <b>Days: 1st March, 2023</b>
        </h3>
        <h3
          className=" px-2 btn btn-light  text-success border border-success border-2"
          style={{ fontSize: "28px" }}
        >
          <b>Pets helped: {metrics[1]}</b>
        </h3>
      </div>
      <div className=" d-flex flex p-4" style={{ height: "auto" }}>
        <div className=" m-auto p-2 m-auto chart">
          <Pie data={data} />
        </div>
        <div
          className="container relative  d-flex align-items-center text-center justify-content-center"
          style={{
            width: "65%",
            height: "auto",
          }}
        >
          {userLocation && pets.length > 0 ? (
            <Map userLocation={userLocation} pets={pets} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
