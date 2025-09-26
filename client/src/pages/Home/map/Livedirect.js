import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { Link } from "react-router-dom";
import "./live.css";

// Example marker icon setup
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to handle routing and clear previous routes
const Directions = ({ start, end }) => {
  const map = useMap();
  const routingControlRef = useRef(null); // Ref to store the routing control instance

  useEffect(() => {
    if (start && end) {
      // Remove the previous route if it exists
      if (routingControlRef.current) {
        routingControlRef.current.getPlan().setWaypoints([]); // Clear the old waypoints
        map.removeControl(routingControlRef.current); // Remove the old route
      }

      // Create a new routing control
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(start[0], start[1]), // "From" location
          L.latLng(end[0], end[1]), // "To" location
        ],
        routeWhileDragging: true,
      }).addTo(map);
    }

    // Clean up: remove the route when the component is unmounted
    return () => {
      if (routingControlRef.current) {
        routingControlRef.current.getPlan().setWaypoints([]); // Clear the waypoints
        map.removeControl(routingControlRef.current); // Remove the routing control
      }
    };
  }, [map, start, end]);

  return null;
};

const Livedirect = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [toLocation, setToLocation] = useState("");
  const [fromCoordinates, setFromCoordinates] = useState(null); // "From" location coordinates
  const [toCoordinates, setToCoordinates] = useState(null); // "To" location coordinates
  const [mapType, setMapType] = useState("terrain"); // Track map view type

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Fetch the coordinates for the "From" location
      if (fromLocation) {
        const fromResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${fromLocation}&format=json&limit=1`
        );
        const fromData = await fromResponse.json();

        if (fromData && fromData.length > 0) {
          const { lat: fromLat, lon: fromLon } = fromData[0];
          setFromCoordinates([parseFloat(fromLat), parseFloat(fromLon)]);
        } else {
          alert("From location not found");
          return;
        }
      }

      // Fetch the coordinates for the "To" location
      if (toLocation) {
        const toResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${toLocation}&format=json&limit=1`
        );
        const toData = await toResponse.json();

        if (toData && toData.length > 0) {
          const { lat: toLat, lon: toLon } = toData[0];
          setToCoordinates([parseFloat(toLat), parseFloat(toLon)]);
        } else {
          alert("To location not found");
          return;
        }
      }
    } catch (error) {
      alert("Error fetching location");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="map-container overflow-x-hidden">
      {/* Input fields for "From" and "To" locations */}
      <input
        type="text"
        placeholder="From location"
        value={fromLocation}
        onChange={(e) => setFromLocation(e.target.value)}
        className="location-input"
      />
      <input
        type="text"
        placeholder="To location"
        value={toLocation}
        onChange={(e) => setToLocation(e.target.value)}
        className="location-input relative z-10"
      />
      <button className="search-button relative z-10" onClick={handleSearch}>
        Search
      </button>
      <button className="directions-button cursor-pointer relative z-10">
        <Link to="/maplive">Get Places</Link>
      </button>

      {/* Loader animation */}
      {loading && (
        <div className="flex justify-center items-center my-4">
          <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-gray-600">Fetching directions...</span>
        </div>
      )}

      {/* Buttons to toggle between map views */}
      <div
        className="map-buttons"
        style={{
          position: "relative",
          zIndex: "1",
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

      {/* Map display */}
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
        {/* Conditionally render terrain or satellite view */}
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

        {/* Display markers and directions if both coordinates are available */}
        {fromCoordinates && toCoordinates && (
          <>
            <Marker position={fromCoordinates} icon={markerIcon} />{" "}
            {/* "From" location marker */}
            <Marker position={toCoordinates} icon={markerIcon} />{" "}
            {/* "To" location marker */}
            <Directions start={fromCoordinates} end={toCoordinates} />{" "}
            {/* Display directions */}
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Livedirect;
