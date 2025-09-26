import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";
import "./Maplive.css";

// Example marker icon setup (Leaflet icons)
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Custom component to update the map view
const MapFocus = ({ coordinates }) => {
  const map = useMap();
  if (coordinates) {
    map.setView(coordinates, 10);
  }
  return null;
};

const Maplive = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [mapType, setMapType] = useState("terrain");
  const [loading, setLoading] = useState(false); // Loader state

  // Place info dictionary
  const placeInfoMap = {
    Ranchi: {
      image: "/jharkhandimg/ranchi.jpg",
      description:
        "Ranchi, the capital of Jharkhand, is known for its waterfalls, hills, and cultural diversity.",
    },
    Jharkhand: {
      image: "/jharkhandimg/jharkhand.jpeg",
      description:
        "Jharkhand, the 'Land of Forests', offers beautiful landscapes, tribal culture, and rich mineral resources.",
    },
    Agra: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
      description:
        "Agra is home to the Taj Mahal, a symbol of love and one of the Seven Wonders of the World.",
    },
    Delhi: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/India_Gate_in_New_Delhi_03-2016_img3.jpg",
      description:
        "Delhi, India's capital, blends modern city life with rich history through monuments like India Gate and Qutub Minar.",
    },
  };

  const handleSearch = async () => {
    setLoading(true); // Start loading
    setCoordinates(null);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      alert("Error fetching location");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Pick info from dictionary (default to Delhi if not found)
  const placeInfo =
    placeInfoMap[location.charAt(0).toUpperCase() + location.slice(1)] ||
    placeInfoMap["Delhi"];

  return (
    <div className="map-container overflow-x-hidden">
      {/* Input field */}
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-input"
      />
      <button className="search-button relative z-10" onClick={handleSearch}>
        {loading ? "Searching..." : "Search"}
      </button>
      <button className="directions-button relative z-10">
        <Link to="/Livedirect">Get Directions</Link>
      </button>

      {/* Loader animation */}
      {loading && (
        <div className="flex justify-center items-center my-4">
          <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-gray-600">Fetching location...</span>
        </div>
      )}

      <div
        className="map-buttons"
        style={{
          position: "relative",
          zIndex: "1", // Lower z-index so it does not cover buttons
          left: "40vw",
          top: "-30px",
        }}
      >
        <button
          style={{
            background: mapType === "terrain" ? "#90EE90" : "#FCF5E5", // highlight if selected
            color: mapType === "terrain" ? "#222" : "#000",
            marginRight: "10px",
            padding: "10px",
            border:
              mapType === "terrain" ? "2px solid #65a30d" : "1px solid #ccc",
            fontWeight: mapType === "terrain" ? "bold" : "normal",
          }}
          onClick={() => setMapType("terrain")}
        >
          Terrain View
        </button>
        <button
          style={{
            background: mapType === "satellite" ? "#90EE90" : "#FCF5E5",
            padding: "10px",
            border:
              mapType === "satellite" ? "2px solid #65a30d" : "1px solid #ccc",
            fontWeight: mapType === "satellite" ? "bold" : "normal",
            color: mapType === "satellite" ? "#222" : "#000",
          }}
          onClick={() => setMapType("satellite")}
        >
          Satellite View
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={[28.6141, 77.2125]} // Default center of the map
        zoom={15}
        style={{
          height: "500px",
          position: "relative",
          bottom: "30px",
          zIndex: "2",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {mapType === "terrain" ? (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        ) : (
          <TileLayer
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors'
          />
        )}

        {coordinates && (
          <>
            <Marker position={coordinates} icon={markerIcon}>
              <Tooltip direction="top" offset={[0, -30]} opacity={1} permanent>
                <div className="tooltip-content">
                  <img
                    src={placeInfo.image}
                    alt="Place"
                    className="place-image"
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
                  <h3 className="font-semibold">{location}</h3>
                  <p>{placeInfo.description}</p>
                </div>
              </Tooltip>
            </Marker>
            <MapFocus coordinates={coordinates} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Maplive;
