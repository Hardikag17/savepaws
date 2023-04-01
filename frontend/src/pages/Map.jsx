import React, { useState, useEffect } from "react";
import L from "leaflet";

const Map = ({ userLocation, pets }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView(userLocation, 12);

    // Add the tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
      maxZoom: 18,
    }).addTo(map);

    // Add a marker for the user's location
    L.marker(userLocation).addTo(map).bindPopup("Your location");

    // Add markers for the nearby pets
    pets.forEach((pet) => {
      const { name, location, distance } = pet;
      const marker = L.marker(location).addTo(map);
      marker.bindPopup(`${name}<br>Distance: ${distance.toFixed(2)} meters`);
    });

    setMap(map);
  }, [userLocation, pets]);

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default Map;
