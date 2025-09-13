import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getMealsByCategory } from "../services/api";
import { moodData, timeData } from "../constants/constants";

const TabDetails = ({ type }) => {
  const { tab } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        let categoriesToFetch = [];

        if (type === "category") {
          categoriesToFetch = [tab];
        } else if (type === "mood") {
          categoriesToFetch = moodData[tab] || [];
        } else if (type === "time") {
          categoriesToFetch = timeData[tab] || [];
        }

        const allMeals = [];
        for (const category of categoriesToFetch) {
          const data = await getMealsByCategory(category);
          if (data) allMeals.push(...data);
        }

        setMeals(allMeals);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [tab, type]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">{tab} Recipes</h1>
      <p className="text-center text-gray-300 mb-8">
        Explore a variety of delicious recipes under "{tab}".
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {meals.map((meal, index) => (
          <Link key={index} to={`/recipe/${meal.strMeal}`}>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabDetails;
