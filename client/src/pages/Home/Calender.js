import React, { useState } from "react";

const CalendarHeader = () => {
  const [activeTab, setActiveTab] = useState("festivals");
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (month) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const Districts = {
    Ranchi: ["Ranchi", "Bundu", "Tamar", "Khunti"],
    Dhanbad: ["Dhanbad", "Jharia", "Katras", "Govindpur"],
    Bokaro: ["Bokaro Steel City", "Chas", "Phusro"],
    Jamshedpur: ["Jamshedpur", "Ghatshila", "Musabani"],
    Hazaribagh: ["Hazaribagh", "Barhi", "Ramgarh"],
    Deoghar: ["Deoghar", "Madhupur", "Jasidih"],
    Giridih: ["Giridih", "Isri", "Bengabad"],
    Dumka: ["Dumka", "Jama", "Jarmundi"],
  };

  const handleDistrictChange = (district) => {
    setSelectedDistricts((prev) =>
      prev.includes(district)
        ? prev.filter((d) => d !== district)
        : [...prev, district]
    );
  };

  const clearSelection = () => {
    setSelectedMonths([]);
    setSelectedDistricts([]);
  };

  const festivalCards = [
    {
      title: "Sarhul",
      date: "April",
      description:
        "A tribal festival marking the worship of nature and the Sal tree.",
      month: "April",
      districts: ["Ranchi", "Khunti", "Gumla", "Simdega"],
      image: "/jharkhandimg/Sarhul.jpg",
    },
    {
      title: "Karma Festival",
      date: "September",
      description:
        "A harvest festival where devotees worship the sacred Karma tree.",
      month: "September",
      districts: ["Ranchi", "Jamtara", "Dumka", "Giridih"],
      image: "/jharkhandimg/karmafest.jpeg",
    },
    {
      title: "Durga Puja",
      date: "October",
      description:
        "Grand worship of Goddess Durga with pandals, rituals, and cultural events.",
      month: "October",
      districts: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
      image: "/jharkhandimg/durgapuja.jpg",
    },
    {
      title: "Diwali",
      date: "November",
      description:
        "Festival of Lights, celebrated with diyas, fireworks, and sweets across Jharkhand.",
      month: "November",
      districts: ["Ranchi", "Jamshedpur", "Dhanbad", "Deoghar"],
      image: "/home-img/diwali1.jpeg",
    },
    {
      title: "Chhath Puja",
      date: "November",
      description:
        "A major festival where devotees worship the Sun God with rituals on riverbanks.",
      month: "November",
      districts: ["Deoghar", "Dhanbad", "Bokaro", "Ranchi"],
      image: "/jharkhandimg/chattpuja.webp",
    },
    {
      title: "Bhai Dooj",
      date: "November",
      description:
        "Celebration of the bond between brothers and sisters with rituals and blessings.",
      month: "November",
      districts: ["Ranchi", "Jamshedpur", "Hazaribagh", "Dhanbad"],
      image: "/home-img/bhai-dooj.jpg",
    },
    {
      title: "Bol Bam / Shravan Mela",
      date: "July - August",
      description:
        "Devotees carry holy water to Baba Baidyanath Dham in Deoghar, chanting 'Bol Bam.'",
      month: "July",
      districts: ["Deoghar"],
      image: "/jharkhandimg/shravan-mela.webp",
    },
    {
      title: "Holi",
      date: "March",
      description:
        "Festival of Colors marking the arrival of spring, celebrated with joy and togetherness.",
      month: "March",
      districts: ["Ranchi", "Jamshedpur", "Dhanbad", "Giridih"],
      image: "/home-img/holi.jpeg",
    },
  ];

  const eventCards = [
    {
      title: "Music Concert",
      description: "Live Performance",
      month: "August",
    },
    {
      title: "Art Exhibition",
      description: "Display of Modern Art",
      month: "April",
    },
    {
      title: "Tech Conference",
      description: "Latest in Technology",
      month: "June",
    },
  ];

  const filterCardsByMonthAndDistrict = (cards) => {
    return cards.filter((card) => {
      const monthMatch =
        selectedMonths.length === 0 || selectedMonths.includes(card.month);

      const districtMatch =
        selectedDistricts.length === 0 ||
        (card.districts &&
          card.districts.some((d) => selectedDistricts.includes(d)));

      return monthMatch && districtMatch;
    });
  };

  return (
    <div className="text-center py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-600">Every day a</h1>
      <h2 className="text-6xl font-extrabold text-red-600">CELEBRATION</h2>

      {/* Tab Switch */}
      <div className="mt-6 flex justify-center space-x-4">
        {["festivals", "events"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-6 rounded-full font-semibold ${
              activeTab === tab
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="mt-4 flex justify-center space-x-4">
        {/* Month Filter */}
        <div className="relative inline-block text-left">
          <button
            className="inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium text-gray-700"
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            By Month
          </button>
          {isMonthDropdownOpen && (
            <div className="absolute mt-2 w-96 rounded-md shadow-lg bg-white z-50">
              <div className="p-4 grid grid-cols-3 gap-2">
                {months.map((month) => (
                  <label key={month} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-red-500"
                      checked={selectedMonths.includes(month)}
                      onChange={() => handleMonthChange(month)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{month}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-between p-4">
                <button
                  onClick={() => setIsMonthDropdownOpen(false)}
                  className="bg-red-500 text-white py-1 px-3 rounded-full"
                >
                  Apply
                </button>
                <button
                  onClick={clearSelection}
                  className="border border-red-500 text-red-500 py-1 px-3 rounded-full"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        {/* District Filter */}
        <div className="relative inline-block text-left">
          <button
            className="inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium text-gray-700"
            onClick={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
          >
            By Districts
          </button>
          {isDistrictDropdownOpen && (
            <div className="absolute mt-2 w-[500px] rounded-md shadow-lg bg-white z-50">
              <div className="p-4 grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                {Object.keys(Districts).map((region) => (
                  <div key={region}>
                    <h3 className="font-bold text-red-600">{region}</h3>
                    {Districts[region].map((district) => (
                      <label
                        key={district}
                        className="inline-flex items-center"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-red-500"
                          checked={selectedDistricts.includes(district)}
                          onChange={() => handleDistrictChange(district)}
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {district}
                        </span>
                      </label>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-between p-4">
                <button
                  onClick={() => setIsDistrictDropdownOpen(false)}
                  className="bg-red-500 text-white py-1 px-3 rounded-full"
                >
                  Apply
                </button>
                <button
                  onClick={clearSelection}
                  className="border border-red-500 text-red-500 py-1 px-3 rounded-full"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {activeTab === "festivals" &&
          filterCardsByMonthAndDistrict(festivalCards).map((card, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center shadow-lg rounded-lg p-6 h-96"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="relative z-10 flex flex-col justify-end h-full text-center text-white">
                <div className="bg-red-500 py-1 px-3 text-xs rounded-full font-bold absolute top-4 left-4">
                  {card.date}
                </div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-lg font-light mt-2">{card.description}</p>
              </div>
            </div>
          ))}

        {activeTab === "events" &&
          filterCardsByMonthAndDistrict(eventCards).map((card, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center shadow-lg rounded-lg p-6 h-96"
              style={{
                backgroundImage: `url('/path-to-your-image/event-background.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="relative z-10 flex flex-col justify-end h-full text-center text-white">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-lg font-light mt-2">{card.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarHeader;
