import React from "react";

const img3 = "/images/img3.jpeg";
const img4 = "/images/img4.jpg";

function About() {
  const teamMembers = [
    {
      name: "Ankit Singh",
      role: "Frontend Developer",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png", // Replace with actual photo paths
    },
    {
      name: "Samyak",
      role: "Frontend Developer",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png",
    },
    {
      name: "Ajeet",
      role: "Backend Developer",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png",
    },
    {
      name: "Kirti",
      role: "Analyst & Researcher",
      photo:
        "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    },
    {
      name: "Debjit Dey",
      role: "Devops Expert",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png",
    },
    {
      name: "Vikas",
      role: "AI Expert",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png",
    },
  ];

  return (
    <div className="min-w-full h-auto bg-white overflow-x-hidden">
      <div className="h-[5vw] flex justify-center items-center my-3">
        <p className="text-[calc(4vw)] underline text-slate-700 text-center font-extrabold] animate-bounce">
          INTRODUCTION
        </p>
      </div>
      <div className="w-[calc(90vw)] mt-0 h-[calc(80vh)] flex flex-col md:flex-row gap-6 p-6 m-auto  bg-white shadow-xl rounded-lg overflow-hidden ">
        <div className="flex-1 flex h-[calc(60%)] justify-center items-center">
          <div className="w-1/4 min-h-1/2  md:w-3/4">
            <img
              className=" object-contain rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/jharkhandimg/Johar.png"
              alt="Johar Jharkhand Logo"
            />
          </div>
        </div>
        <div className="flex-1 text-gray-700 ">
          <p className="text-lg leading-relaxed font-light">
            Jharkhand, the land of forests, waterfalls, and rich tribal
            heritage, holds countless hidden gems that often remain unexplored
            in mainstream tourism. From sacred temples and vibrant festivals to
            breathtaking landscapes and indigenous crafts, the state offers
            unique stories waiting to be discovered. To bring these treasures
            into the spotlight,{" "}
            <span className="font-semibold text-indigo-600">
              Johar Jharkhand
            </span>{" "}
            emerges as a transformative platform designed to showcase the
            cultural, historical, and natural wealth of the state. By leveraging
            modern technology, our application curates authentic local
            experiences, interactive guides, and rich content that connect
            travelers with Jharkhand’s beauty, while also supporting local
            communities and preserving heritage.
          </p>
          <p className="mt-8 text-lg leading-relaxed font-light">
            The name{" "}
            <span className="font-semibold text-indigo-600">
              Johar Jharkhand
            </span>{" "}
            reflects a heartfelt tribal greeting that embodies the warmth and
            vibrant spirit of the state. Our mission is to bridge the gap
            between visitors and destinations, offering an immersive experience
            that goes beyond conventional tourism. With a focus on
            sustainability, accessibility, and cultural enrichment, Johar
            Jharkhand aspires to create a deeper appreciation of the state’s
            unparalleled natural beauty, tribal traditions, and living heritage.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-white p-8 shadow-2xl transition duration-300 transform ">
        {/* Left Image Section */}
        <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
          <img
            className="rounded-2xl transform transition duration-300 hover:scale-105 hover:brightness-110"
            src={img3}
            alt="bg image"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
          <h1 className="text-4xl font-extrabold py-4 text-white">
            Our Vision
          </h1>
          <p className="px-3 italic text-gray-200 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-indigo-400">
              Johar Jharkhand
            </span>
            , our vision is to celebrate and preserve the state’s tribal
            heritage, natural beauty, and vibrant culture by blending tradition
            with innovation.
          </p>
          <p className="px-3 mt-4 text-gray-300">
            Through technology-driven storytelling, sustainable tourism, and
            interactive experiences, we aim to connect travelers with
            Jharkhand’s hidden gems—forests, waterfalls, festivals, and
            crafts—while empowering local communities.
          </p>
        </div>
      </div>

      {/* story section */}
      <div className="flex flex-col lg:flex-row items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-white p-8 shadow-2xl transition duration-300 transform ">
        {/* left Text Section */}
        <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
          <h1 className="text-4xl font-extrabold py-4 text-white">Our Story</h1>
          <p className="px-3 italic text-gray-200 leading-relaxed">
            In September, our team took part in an inter-university hackathon, a
            stepping stone to the Smart India Hackathon 2024. Inspired by the
            need to showcase our homeland, we chose a problem statement rooted
            in Jharkhand — how to highlight its hidden cultural gems, natural
            beauty, and tribal heritage to the world.
          </p>
          <p className="px-3 italic text-gray-200 leading-relaxed">
            Through long discussions and countless ideas, we envisioned a
            platform that combines tourism, culture, and livelihood
            opportunities. This is how{" "}
            <span className="font-semibold text-indigo-400">
              Johar Jharkhand
            </span>
            was born — a project to digitally preserve Jharkhand’s legacy while
            empowering local communities and offering travelers a unique
            cultural journey.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
          <img
            className="rounded-2xl w-full transform transition duration-300 hover:scale-105 hover:brightness-110"
            src="/images/our-story.jpg"
            alt="bg image"
          />
        </div>
      </div>

      {/* offer section  */}
      <div className="my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 shadow-2xl transition duration-300 transform ">
        <div className="w-full bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center text-white">
          <h1 className="text-4xl font-extrabold py-6 text-yellow-50 animate-pulse">
            What We Offer
          </h1>
          <div className="flex lg:flex-wrap flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-500 hover:text-white">
              <h1 className="text-2xl font-bold">Interactive Jharkhand Map</h1>
              <p>
                Explore Jharkhand’s districts through our interactive cultural
                map, highlighting waterfalls, temples, festivals, and tribal
                traditions.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-500 hover:text-white">
              <h1 className="text-2xl font-bold">Virtual Tours</h1>
              <p>
                Experience iconic spots like Dassam Falls, Baidyanath Dham, and
                Netarhat hills with immersive 360-degree virtual tours.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-red-500 hover:text-white">
              <h1 className="text-2xl font-bold break-words hidden md:block">
                Personalized Recommendations
              </h1>
              <h1 className="text-2xl font-bold break-words block md:hidden">
                Personalized Recom..
              </h1>
              <p>
                Get suggestions for local stays, tribal cuisines, guides, and
                cultural experiences tailored to your interests.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-yellow-500 hover:text-white">
              <h1 className="text-2xl font-bold">
                Cultural Events & Workshops
              </h1>
              <p>
                Join live events like Sarhul, Karma Festival, and local craft
                workshops to experience Jharkhand’s vibrant traditions.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-purple-500 hover:text-white">
              <h1 className="text-2xl font-bold">Educational Resources</h1>
              <p>
                Access resources on Jharkhand’s history, tribal knowledge, and
                heritage, designed for students, educators, and travelers.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-teal-500 hover:text-white">
              <h1 className="text-2xl font-bold">Artisan Marketplace</h1>
              <p>
                Support local artisans by purchasing traditional handloom
                sarees, tribal jewelry, and bamboo crafts directly from
                Jharkhand’s villages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our mission Content Section */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-white p-8 shadow-2xl transition duration-300 transform hover:scale-105">
        {/* right Image Section */}
        <div className="w-full lg:min-h-full object-cover lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
          <img
            className="rounded-2xl transform transition duration-300 hover:scale-105 hover:brightness-110"
            src={img4}
            alt="bg image"
          />
        </div>

        {/* left Text Section */}
        <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
          <h1 className="text-4xl font-extrabold py-4 text-white">
            Our Mission
          </h1>
          <p className="px-3 italic text-gray-200 text-lg leading-relaxed">
            Our mission is to digitally showcase Jharkhand’s rich tribal
            culture, breathtaking landscapes, and heritage while promoting
            sustainable tourism that uplifts local communities.
          </p>
          <p className="px-3 mt-4 text-gray-300">
            Join us in celebrating the spirit of Jharkhand –
            <span className="font-semibold text-indigo-400">
              {" "}
              Johar Jharkhand
            </span>
            : where tradition meets innovation!
          </p>
        </div>
      </div>

      {/* meet my team */}
      <div className="w-full h-[calc(60vh)] p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white h-full shadow-md rounded-lg overflow-hidden flex flex-col items-center p-8"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
