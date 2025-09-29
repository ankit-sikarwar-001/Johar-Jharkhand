import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const [muted, setMuted] = useState(true);
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [transport, setTransport] = useState("");

  const toggleAudio = () => {
    console.log("hello ");
    setMuted(!muted);
  };

  const handleSubmit = () => {
    if (!location || !date || !transport) {
      alert("Please fill all fields before booking.");
      return;
    }

    // Pass data to Planner using state
    window.scrollTo(0, 0);
    navigate("/planner", {
      state: { location, date, transport },
    });
  };

  return (
    <>
      {" "}
      <section className="relative h-80vh w-90vw mx-auto">
        {/* Background Video (Cloudinary Embed) */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <video
            controls
            autoPlay
            muted={muted}
            playsInline
            style={{ width: "100%", aspectRatio: "640/360" }}
          >
            <source
              src="https://res.cloudinary.com/dbzxnoveu/video/upload/jharkhand_ohduyc.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* <video
            className="w-full h-full object-cover rounded-2xl"
            src="https://player.cloudinary.com/embed/?cloud_name=dbzxnoveu&public_id=jharkhand_ohduyc&profile=cld-default"
            // /videos/india1.mp4
            autoPlay
            muted={muted}
            loop
            playsInline
          ></video> */}
          <button
            onClick={toggleAudio}
            className="absolute top-4 z-20 right-4 bg-white text-black px-4 py-2 rounded-md shadow-md"
          >
            {muted ? "Turn Audio On" : "Turn Audio Off"}
          </button>
        </div>

        {/* Overlay for darker effect */}
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center items-start h-full px-4"></div>

        {/* Search Bar - Positioned at the bottom, half inside and half outside the image */}
        <div className="relative z-20 w-full max-w-7xl mx-auto -mt-20">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            {/* Tab Navigation */}
            <div className="flex space-x-8 text-sm mb-4">
              <a
                href="#staycation"
                className="font-semibold text-black border-b-2 border-blue-500 pb-1"
              >
                Book Vacations
              </a>
              {/* <a
                href="#experience"
                className="text-gray-500 hover:text-black transition"
              >
                Experiences
              </a> */}
            </div>

            {/* Search Inputs - All in one line */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white shadow-md rounded-xl p-6">
              {/* Current Location */}
              <div className="flex-1">
                <label className="block text-gray-500 mb-1">
                  Your Location?
                </label>
                <input
                  type="text"
                  placeholder="Enter your current city..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* When */}
              <div className="flex-1">
                <label className="block text-gray-500 mb-1">When?</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* Mode of Transport */}
              <div className="flex-1">
                <label className="block text-gray-500 mb-1">
                  Preferred Transport?
                </label>
                <select
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="">Select Transport</option>
                  <option value="Bus">Bus</option>
                  <option value="Train">Train</option>
                  <option value="Flight">Flight</option>
                  <option value="Taxi">Taxi</option>
                </select>
              </div>

              {/* Button */}
              <div className="sm:w-auto pt-5">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
                >
                  Plan & Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // section 2 starts */}
      <br />
      <br />
      <br />
    </>
  );
};

export default Section;
