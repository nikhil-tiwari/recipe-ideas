import React from "react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";

const colorMap = {
  green: "bg-green-500",
  purple: "bg-purple-500",
  yellow: "bg-yellow-500",
};

const routeMap = {
  green: "/categories",
  purple: "/mood",
  yellow: "/time",
};

const InfoSection = ({ title, description, color, reverse }) => {
  const [ref, isInView] = useInView();
  const bgColor = colorMap[color] || "bg-gray-500";
  const route = routeMap[color] || "/";

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-4 sm:px-0 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <Link
        to={route}
        className={`${bgColor} rounded-3xl p-12 sm:p-16 w-full sm:w-80 text-center text-white font-bold text-3xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl ${
          isInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {title}
      </Link>

      <p
        className={`text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed drop-shadow-md 
                    text-center md:text-left ${
                      isInView ? "animate-fadeIn delay-100" : "opacity-0"
                    }`}
      >
        {description}
      </p>
    </div>
  );
};

export default InfoSection;
