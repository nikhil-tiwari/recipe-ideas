import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-6xl font-extrabold mb-6">404</h1>
      <h2 className="text-3xl mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist. It might have been
        removed or the URL is incorrect.
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
