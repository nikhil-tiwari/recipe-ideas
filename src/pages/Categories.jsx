import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../services/api";
import Loader from "../components/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        const categoryNames = data.map((item) => item.strCategory);
        setCategories(categoryNames);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mt-4 mb-8 text-center">
        All Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/categories/${category}`}
            className="bg-green-600 rounded-lg p-6 text-center shadow-lg hover:scale-105 transform transition"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
