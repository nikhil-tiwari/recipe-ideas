import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error(`Error fetching meals in category "${category}":`, error);
    throw error;
  }
};

export const searchMealsByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    return response.data.meals || [];
  } catch (error) {
    console.error(
      `Error searching meals by ingredient "${ingredient}":`,
      error
    );
    throw error;
  }
};

export const searchMealByName = async (mealName) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${mealName}`);
    return response.data.meals || [];
  } catch (error) {
    console.error(`Error searching meal by name "${mealName}":`, error);
    throw error;
  }
};
