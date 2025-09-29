import React from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../Explore/explore.css";
import NamasteSpeaker from "../Explore/NamasteSpeaker";
import Mapnavi from "../Home/Mapnavi";

export default function Explore() {
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const audioRefs = useRef([]);
  const play = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
    }
  };

  const stop = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
    }
  };

  useEffect(() => {
    const textElement = textRef.current;
    const textContent =
      "Explore the beauty of Jharkhand through Johar Jharkhand";
    let index = 0;

    const typingEffect = setInterval(() => {
      if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index);
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);
  return (
    <div>
      <div className="w-full h-[calc(90vh)] overflow-hidden ">
        <img
          className="w-full h-screen object-cover object-top"
          src="/images/explore.png"
          alt="image"
        />
        <div className="relative bottom-[calc(80vh)] pl-[calc(15vw)] h-1/3 text-5xl  font-extrabold w-[calc(40vw)]">
          <p
            className="bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text text-transparent "
            id="typing-text"
            ref={textRef}
          ></p>
        </div>
      </div>

      {/* music ssection */}
      <div
        className="mt-8 p-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cartoon-style-musical-notes-background_23-2151056769.jpg')",
        }}
      >
        <h2 className="text-center text-slate-800 text-3xl font-bold mb-4">
          Explore the diverse cultural music of Jharkhand
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center place-items-center">
          {[
            "Johar Jharkhand",
            "Thar_Ghuma",
            "Chota Nagpur",
            "Mohini",
            "GANJA",
            "Chudi Payal",
          ].map((song, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-3">
              <img
                onClick={() => play(index)}
                onDoubleClick={() => stop(index)}
                className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
                src={`/jharkhandimg/${song
                  .toLowerCase()
                  .replace(" ", "_")}.jpg`}
                alt={song}
              />
              <audio
                ref={audioRefs}
                src={`/audio/${song.toLowerCase().replace(" ", "_")}.mp3`}
                controls
                className="w-full mt-2 border border-gray-300"
              ></audio>
              <p className="text-center mt-2">{song}</p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center place-items-center">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-3">
            <img
              onClick={() => play(0)}
              onDoubleClick={() => stop(0)}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              src="/jharkhandimg/joharJharkhand.jpg"
              alt="Johar Jharkhand"
            />
            <audio
              ref={audioRefs}
              src="/audio/JoharJharkhand.mp3"
              controls
              className="w-full mt-2 border border-gray-300"
            ></audio>
            <p className="text-center mt-2">Johar Jharkhand</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-3">
            <img
              onClick={() => play(1)}
              onDoubleClick={() => stop(1)}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              src="/jharkhandimg/tharGhuma.jpg"
              alt="Thar Ghuma"
            />
            <audio
              ref={audioRefs}
              src="/audio/tharGhuma.mp3"
              controls
              className="w-full mt-2 border border-gray-300"
            ></audio>
            <p className="text-center mt-2">Thar Ghuma</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-3">
            <img
              onClick={() => play(2)}
              onDoubleClick={() => stop(2)}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              src="/jharkhandimg/chotaNagpur.jpg"
              alt="Chota Nagpur"
            />
            <audio
              ref={audioRefs}
              src="/audio/chotaNagpur.mp3"
              controls
              className="w-full mt-2 border border-gray-300"
            ></audio>
            <p className="text-center mt-2">Chota Nagpur</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-3">
            <img
              onClick={() => play(3)}
              onDoubleClick={() => stop(3)}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              src="/jharkhandimg/mohini.jpg"
              alt="Mohini"
            />
            <audio
              ref={audioRefs}
              src="/audio/Mohini.mp3"
              controls
              className="w-full mt-2 border border-gray-300"
            ></audio>
            <p className="text-center mt-2">Mohini</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-3">
            <img
              onClick={() => play(4)}
              onDoubleClick={() => stop(4)}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              src="/jharkhandimg/ganja.jpg"
              alt="GANJA"
            />
            <audio
              ref={audioRefs}
              src="/audio/Ganja.mp3"
              controls
              className="w-full mt-2 border border-gray-300"
            ></audio>
            <p className="text-center mt-2">GANJA</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-3">
            <img
              onClick={() => play(5)}
              onDoubleClick={() => stop(5)}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              src="/jharkhandimg/chudiPayal.jpg"
              alt="Chudi Payal"
            />
            <audio
              ref={audioRefs}
              src="/audio/chudiPayal.mp3"
              controls
              className="w-full mt-2 border border-gray-300"
            ></audio>
            <p className="text-center mt-2">Chudi Payal</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            // onClick={redirectToLogin}
            className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            <NavLink className="mx-3 text-white my-2 md:my-0" to="/login">
              Explore More Music
            </NavLink>
          </button>
        </div>
      </div>

      {/* creative legacy */}
      <div className="h-[calc(90vh)] mt-5 w-full">
        <div className="h-1/2 bg-slate-700 relative">
          <div className="text-white text-center text-7xl font-thick font-extrabold py-10">
            <p>Jharkhand's Creative Legacy</p>
            <p className="font-normal text-3xl mt-5">
              -----of timeless tradition-----
            </p>
          </div>
        </div>
        <section className="py-16 bg-transparent relative z-10 bottom-52">
          <div className="max-w-7xl mx-auto px-4">
            {/* Cards Slider */}
            <div
              ref={scrollRef}
              className="flex hover:overflow-x-scroll overflow-x-hidden space-x-8 scrollbar-hide h-96"
            >
              {/* Card 1 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://c7.alamy.com/comp/2C5BEEY/bamboo-made-tree-decorated-with-clay-made-butterflybeebird-and-dragonfly-by-santal-or-santhal-tribe-of-bengal-2C5BEEY.jpg"
                  alt="kathputli-image"
                />
                <div className="p-6">
                  {/* <h3 className="text-l font-bold text-red-600 ">Rajasthan</h3> */}
                  <p className="text-black mb-1 mt-2">
                    Bamboo Made tree :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black text-sm">
                    Bamboo made tree decorated with clay made butterfly,bee,bird
                    and dragonfly by santal or santhal tribe of bengal
                  </p>
                  <a
                    href="/"
                    className="text-red-600 hover:text-red-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://5.imimg.com/data5/EF/LF/MY-4031115/printed-silk-saree.jpg"
                  alt="bagh print-image"
                />
                <div className="p-6">
                  <h3 className="text-l font-bold text-red-600 ">
                    Ramgarh Famous Saree
                  </h3>
                  <p className="text-black mb-1 mt-2">
                    Garh Print :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Bagh print of Jharkhand blends traditional printing with
                    vibrant natural dyes.
                  </p>
                  <a
                    href="/"
                    className="text-red-600 hover:text-red-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="/crafts-images/bastar-dhokra.jpeg"
                  alt="dhokra-image"
                />
                <div className="p-6">
                  {/* <h3 className="text-l font-bold text-red-600 ">Chattisgarh</h3> */}
                  <p className="text-black mb-1 mt-2">
                    Bastar Dhokra :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Bastar Dhokra showcases ancient metal casting with tribal
                    designs.
                  </p>
                  <a
                    href="/"
                    className="text-red-600 hover:text-red-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
              {/* Add More Cards Here */}
              {/* card - 4  */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1748662332315_nh9gy_1224x816.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75"
                  alt="kathputli-image"
                />
                <div className="p-6">
                  {/* <h3 className="text-l font-bold text-red-600 ">Bihar</h3> */}
                  <p className="text-black mb-1 mt-2">
                    Artifacts :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    This art highlights intricate work & blending tradition with
                    creativity.
                  </p>
                  <a
                    href="/"
                    className="text-red-600 hover:text-red-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
              {/* card 5 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://im.hunt.in/cg/jhar/About/toys.jpg"
                  alt="kathputli-image"
                />
                <div className="p-6">
                  {/* <h3 className="text-l font-bold text-red-600 ">Rajasthan</h3> */}
                  <p className="text-black mb-1 mt-2">
                    Kathputlis :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Jharkhand Kathputlis showcase India's traditional puppet
                    artistry.
                  </p>
                  <a
                    href="/"
                    className="text-red-600 hover:text-red-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* languages */}
      <NamasteSpeaker />

      {/* legacy ends  */}
      <div className="relative bg-gradient-to-r from-pink-200 via-purple-600 to-indigo-700 py-16">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-10 underline decoration-yellow-400">
          Jharkhand's Diverse Beautiful Sarees
        </h2>

        {/* Saree Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {/* Saree 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-80 object-cover object-top"
              src="https://maahishmati.com/cdn/shop/files/BestCottonsareesofyear20242025byMaahishmatiSarees-Bhagalpurcottonslubsarees_60.jpg?v=1720296452&width=600"
              alt="Banarasi Saree"
            />
            <div className="bg-white text-center py-3 font-semibold text-gray-800">
              Bhagalpur Saree
            </div>
          </div>

          {/* Saree 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-80 object-cover  object-top"
              src="https://d2ki7eiqd260sq.cloudfront.net/Mustard-Woven-Pure-Silk-Kanjivaram-Saree81607057-3115-43b4-8836-4f13c6366807.jpg"
              alt="Chikankari Saree"
            />
            <div className="bg-white text-center py-3 font-semibold text-gray-800">
              Ranchi Saree
            </div>
          </div>

          {/* Saree 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-80 object-cover  object-top"
              src="https://i.pinimg.com/736x/27/3f/58/273f58e74be233c9b534d2620c1b499c.jpg"
              alt="Bhagalpuri Saree"
            />
            <div className="bg-white text-center py-3 font-semibold text-gray-800">
              Khunti & Ghumla Saree
            </div>
          </div>

          {/* Saree 4 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-80 object-cover object-top"
              src="https://www.sareemanufacturers.com/uploaded-files/category/images/thumbs/Sequins-Work-Saree-thumbs-337X460.jpg"
              alt="Saraikela-Kharsawan Saree"
            />
            <div className="bg-white text-center py-3 font-semibold text-gray-800">
              Saraikela-Kharsawan Saree
            </div>
          </div>
        </div>
      </div>
      <Mapnavi />
    </div>
  );
}
