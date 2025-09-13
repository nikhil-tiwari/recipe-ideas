import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-extrabold mb-2">EasyRecipe</h2>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Your go-to place for discovering delicious recipes, cooking tips,
            and meal inspiration. Bringing flavors to life has never been
            easier.
          </p>
        </div>

        <div className="flex flex-row gap-6">
          <Link
            to="/categories"
            className="text-gray-400 hover:text-white transition"
          >
            Categories
          </Link>
          <Link
            to="/mood"
            className="text-gray-400 hover:text-white transition"
          >
            Mood
          </Link>
          <Link
            to="/time"
            className="text-gray-400 hover:text-white transition"
          >
            Time
          </Link>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-gray-500 text-center text-sm">
        © {new Date().getFullYear()} EasyRecipe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
