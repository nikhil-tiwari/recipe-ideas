const MealGrid = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealGrid;
