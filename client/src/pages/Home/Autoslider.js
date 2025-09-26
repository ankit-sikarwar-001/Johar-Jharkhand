import React, { useRef } from "react";

function Autoslider() {
  const scrollRef = useRef(null);

  //   const handleScrollRight = () => {
  //     scrollRef.current.scrollBy({
  //       left: 300, // Adjust this value based on how much you want to scroll with each click
  //       behavior: "smooth",
  //     });
  //   };
  return (
    <div className="h-screen w-full">
      <div className="h-1/2 bg-red-600 relative">
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
  );
}

export default Autoslider;
