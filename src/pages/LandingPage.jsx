import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import InfoSection from "../components/InfoSection";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/ingredient/${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center px-4 pt-20 sm:pt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6">
        Discover Delicious Recipes
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-white max-w-xl mb-12">
        Explore hundreds of easy-to-follow recipes, cooking tips, and meal ideas
        that bring flavors to life. Whether you're a beginner or a pro, find
        inspiration to cook your next favorite dish.
      </p>

      <div className="w-full max-w-4xl overflow-hidden relative h-64 mb-12">
        <div className="animate-scroll-horizontal flex">
          {images.concat(images).map((src, index) => (
            <div key={index} className="flex-shrink-0 p-4">
              <img
                src={src}
                alt={`Carousel ${index + 1}`}
                className="h-48 w-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="w-full max-w-3xl flex items-center mb-16 bg-white rounded-full shadow-lg overflow-hidden"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What ingredient do you have?"
          className="flex-grow min-w-0 rounded-l-full bg-transparent px-4 sm:px-6 py-3 sm:py-4 text-gray-900 placeholder-gray-500 text-base sm:text-lg outline-none"
        />
        <button
          type="submit"
          className="rounded-r-full bg-gradient-to-r from-green-500 to-blue-500 px-4 sm:px-6 py-3 sm:py-4 text-white font-semibold shadow-md text-base sm:text-lg hover:from-green-600 hover:to-blue-600 transition"
        >
          Search
        </button>
      </form>

      <div className="w-full max-w-5xl space-y-16 mb-24">
        <InfoSection
          title="Category"
          color="green"
          description="Explore a wide range of recipe categories, from hearty Beef and Chicken dishes to fresh Seafood, Vegetarian, and Vegan options. Whether you're craving a classic comfort meal or a light, healthy dish, you'll find inspiration for every taste and occasion."
        />

        <InfoSection
          title="Mood"
          color="purple"
          reverse
          description="Discover recipes that match your mood. Indulge in hearty Comfort Food like Beef, Chicken, or Lamb, enjoy nourishing and balanced Healthy meals, or keep it simple with Quick and Light dishes for breakfast or snacks. When it's time to treat yourself, decadent Desserts and pasta dishes are ready to delight."
        />

        <InfoSection
          title="Time"
          color="yellow"
          description="Easily filter recipes based on the time you have. Start your day with quick and energizing breakfasts, enjoy satisfying mains for lunch or dinner, or prepare simple and light meals for a snack. Sweet desserts provide the perfect ending to any meal or occasion."
        />
      </div>
    </div>
  );
};

export default LandingPage;
