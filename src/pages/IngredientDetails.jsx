import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { searchMealsByIngredient } from "../services/api";

const IngredientDetails = () => {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const data = await searchMealsByIngredient(ingredient);
        if (data) setMeals(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [ingredient]);

  if (loading) return <Loader />;

  if (!meals.length)
    return (
      <p className="text-white text-center mt-8">
        No recipes found for "{ingredient}".
      </p>
    );

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Recipes with "{ingredient}"
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Explore a variety of recipes that include "{ingredient}".
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

export default IngredientDetails;
