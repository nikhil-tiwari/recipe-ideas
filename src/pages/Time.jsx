import React from "react";
import { Link } from "react-router-dom";
import { timeData } from "../constants/constants";

const Time = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mt-4 mb-2 text-center">
        Time Based Recipes
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Discover recipes that fit perfectly into your schedule — whether it's a
        quick breakfast, a hearty dinner, or a sweet treat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.keys(timeData).map((time, index) => (
          <Link
            to={`/time/${time}`}
            key={index}
            className="bg-yellow-500 rounded-xl p-8 shadow-lg hover:scale-105 transform transition flex items-center justify-center"
          >
            <h2 className="text-2xl font-semibold text-center">{time}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Time;
