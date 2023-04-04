import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "../styles/map.css";

const Map = ({ userLocation, pets }) => {
  const icon = new Icon({
    iconUrl: "/assets/icon.svg",
    iconSize: [50, 50],
  });

  const user = new Icon({
    iconUrl: "/assets/user.svg",
    iconSize: [50, 50],
  });

  return (
    <div className=" container-fluid mb-5">
      <MapContainer center={userLocation} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[userLocation[0], userLocation[1]]} icon={user}>
          <Popup>
            <div>
              <h6>
                <i>You</i>
              </h6>
            </div>
          </Popup>
        </Marker>
        {pets.map((loc, i) => (
          <Marker
            key={i}
            position={[
              loc.location.coordinates[0],
              loc.location.coordinates[1],
            ]}
            icon={icon}
          >
            <Popup>
              <div>
                <h6>
                  <b>Name:</b> {loc.Name}
                </h6>
                <h6>
                  <b>Distance:</b> {(loc.distance / 1000).toFixed(2)} Km
                </h6>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
