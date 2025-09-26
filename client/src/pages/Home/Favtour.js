import React, { useState } from "react";

const Favtour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Baba Baidyanath Temple",
      description: `Baba Baidyanath Temple in Deoghar, Jharkhand, is one of the twelve Jyotirlingas of Lord Shiva. A major pilgrimage site, it attracts millions of devotees, especially during Shravan, when Kanwariyas offer holy Ganga water with chants of “Bol Bam.`,
      imageUrl: "/jharkhandimg/bol-bam.jpg", // Replace with actual image path
    },
    {
      title: "Dassam Falls",
      description: `Dassam Falls, located near Ranchi in Jharkhand, is a stunning waterfall on the Kanchi River, dropping from a height of about 144 feet. Surrounded by lush forests, it is a popular spot for nature lovers and tourists seeking scenic beauty and tranquility.`,
      imageUrl: "/jharkhandimg/dassam-falls.jpg", // Replace with actual image path
    },
    {
      title: "Jagannath Temple",
      description: `Delhi, the capital of India, is a vibrant blend of tradition and modernity. It is home 
                to historical landmarks like the Red Fort, Qutub Minar, and India Gate. The city's bustling 
                markets, street food, and cultural diversity make it a must-visit destination.`,
      imageUrl: "/jharkhandimg/jagannath-temple.jpg", // Replace with actual image path
    },
    {
      title: "Trikuta Parvata",
      description: `Trikuta Parvata, located near Deoghar in Jharkhand, is a sacred hill with three peaks believed to symbolize the Hindu Trinity—Brahma, Vishnu, and Shiva. A popular spiritual and trekking destination, it offers both religious significance and scenic views.`,
      imageUrl: "/jharkhandimg/trikuta-parvat-deoghar.jpg", // Replace with actual image path
    },
  ];

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center ">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-pink-500">
          How We Meet
        </h2>
        <h1 className="text-4xl font-semibold text-pink-600">
          Some Details For Your Tour Places
        </h1>
        <div className="mt-2 w-16 mx-auto border-t-2 border-gray-300"></div>
      </div>

      {/* Slider Content */}
      <div className="relative w-full max-w-6xl mx-auto h-[450px]">
        {/* Slide Image */}
        <img
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
          className="w-3/5 h-full object-cover rounded-lg"
        />
        {/* Slide Content Box */}
        <div className="absolute right-5 top-1/4 bg-white p-6 shadow-2xl rounded-lg w-[500px] h-[200px]">
          <h3 className="text-2xl font-serif text-pink-600 mb-2">
            {slides[currentSlide].title}
          </h3>
          <p className="text-gray-600">{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* Bullet Navigation */}
      <div className="flex justify-center mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBulletClick(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Favtour;
