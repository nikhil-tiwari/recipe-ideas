import React from "react";
import { Link } from "react-router-dom";
import { moodData } from "../constants/constants";

const Mood = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mt-4 mb-2 text-center">
        Mood Based Recipes
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Find recipes tailored to your mood — from indulgent treats to healthy
        meals that make you feel great.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.keys(moodData).map((mood, index) => (
          <Link
            to={`/mood/${mood}`}
            key={index}
            className="bg-purple-600 rounded-xl p-8 shadow-lg hover:scale-105 transform transition flex items-center justify-center"
          >
            <h2 className="text-2xl font-semibold text-center">{mood}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mood;
