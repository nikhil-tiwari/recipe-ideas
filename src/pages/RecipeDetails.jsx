import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMealByName } from "../services/api";
import Loader from "../components/Loader";

const RecipeDetails = () => {
  const { recipe } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const data = await searchMealByName(recipe);
        if (data.length > 0) setMeal(data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [recipe]);

  if (loading) return <Loader />;
  if (!meal)
    return (
      <p className="text-white text-center mt-8 min-h-[50vh]">
        Recipe not found.
      </p>
    );

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  const instructions = meal.strInstructions
    .split(/\r?\n/)
    .filter((step) => step.trim() !== "");

  return (
    <div className="min-h-[80vh] text-white p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg mb-8"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {meal.strYoutube && (
        <div className="text-center mt-8">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg font-medium"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
