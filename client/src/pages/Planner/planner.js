import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Planner = () => {
  const locationData = useLocation();
  const { location, date, transport } = locationData.state || {};
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    duration: 3,
    budget: "",
    type: "",
    people: 1,
  });

  const handleNext = () => {
    if (step === 4) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(5);
      }, Math.floor(Math.random() * 4000) + 1000); // 1–5 sec loader
    } else {
      setStep(step + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const transportData = {
    Bus: { cost: 2000, time: 30 },
    Train: { cost: 600, time: 19 },
    Flight: { cost: 5000, time: 2 },
    Taxi: { cost: 25000, time: 24 },
  };

  const generatePlan = () => {
    const baseCost =
      formData.duration *
      formData.people *
      (transportData[transport]?.cost || 1000);

    const travelTime = transportData[transport]?.time || 5;

    return {
      roadmap: `Starting from ${location} on ${date}, taking ${transport}, 
        you will enjoy a ${formData.duration}-day ${formData.type} trip in Jharkhand.`,

      cost: `Estimated total cost: ₹${baseCost.toLocaleString()}`,

      route: [
        {
          day: 1,
          from: location,
          to: "Ranchi",
          transport,
          time: `${travelTime} hrs`,
        },
        {
          day: 2,
          from: "Ranchi",
          to: "Netarhat",
          transport: "Taxi",
          time: "4 hrs",
        },
        {
          day: 3,
          from: "Netarhat",
          to: "Betla National Park",
          transport: "Bus",
          time: "3 hrs",
        },
      ],

      hotels: [
        {
          name: "Hotel Ranchi Residency",
          location: "Ranchi",
          price: "₹2,500 / night",
          image: "https://gos3.ibcdn.com/cde0048604ac11ec9ef60a58a9feac02.jpg",
        },
        {
          name: "Hill View Retreat",
          location: "Netarhat",
          price: "₹3,200 / night",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479876312.jpg?k=31a",
        },
      ],
    };
  };

  const plan = step === 5 ? generatePlan() : null;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        {/* Stepper Header with connection lines */}
        <div className="flex items-center justify-between mb-8 relative">
          {[1, 2, 3, 4, 5].map((s, index) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  s <= step ? "bg-green-600 text-white" : "bg-gray-300"
                }`}
              >
                {s}
              </div>
              {index < 4 && (
                <div
                  className={`flex-1 h-1 ${
                    s < step ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex flex-col justify-center items-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600 font-medium">
              Thinking & preparing your plan...
            </p>
          </div>
        )}

        {/* Steps */}
        {!loading && (
          <>
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  How long is your trip?
                </h2>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={formData.duration}
                  name="duration"
                  onChange={handleChange}
                  className="w-full"
                />
                <p className="mt-2 text-gray-600">
                  Duration: {formData.duration} days
                </p>
                <button
                  onClick={handleNext}
                  className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  What's your budget?
                </h2>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Choose Budget</option>
                  <option value="Budget">₹5,000 - ₹15,000</option>
                  <option value="Mid-range">₹15,000 - ₹35,000</option>
                  <option value="Luxury">₹35,000+</option>
                </select>
                <button
                  onClick={handleNext}
                  className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  What type of trip do you prefer?
                </h2>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select preference</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Nature">Nature & Waterfalls</option>
                  <option value="Cultural">Cultural & Heritage</option>
                  <option value="Nightlife">Nightlife & Clubs</option>
                </select>
                <button
                  onClick={handleNext}
                  className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  How many people are traveling?
                </h2>
                <input
                  type="number"
                  min="1"
                  max="20"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <button
                  onClick={handleNext}
                  className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg"
                >
                  Generate Plan
                </button>
              </div>
            )}

            {step === 5 && plan && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  ✨ Your Jharkhand Itinerary
                </h2>
                <p className="text-gray-700 mb-2">{plan.roadmap}</p>
                <p className="text-gray-800 font-semibold">{plan.cost}</p>

                {/* Travel Route */}
                <h3 className="mt-6 font-semibold text-lg">📍 Travel Route:</h3>
                <div className="bg-gray-50 p-4 rounded-lg shadow mt-2">
                  {plan.route.map((r, i) => (
                    <p key={i} className="text-gray-700 mb-1">
                      <span className="font-bold">Day {r.day}:</span> {r.from} ➝{" "}
                      {r.to} via {r.transport} ({r.time})
                    </p>
                  ))}
                </div>

                {/* Hotels */}
                <h3 className="mt-6 font-semibold text-lg">
                  🏨 Recommended Hotels:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  {plan.hotels.map((h, i) => (
                    <div
                      key={i}
                      className="border rounded-lg shadow hover:shadow-lg transition p-3"
                    >
                      <img
                        src={h.image}
                        alt={h.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <h4 className="mt-2 font-bold text-gray-800">{h.name}</h4>
                      <p className="text-sm text-gray-600">{h.location}</p>
                      <p className="text-green-700 font-semibold">{h.price}</p>
                      <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Planner;
