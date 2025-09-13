import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Categories from "./pages/Categories";
import Mood from "./pages/Mood";
import Time from "./pages/Time";
import TabDetails from "./pages/TabDetails";
import RecipeDetails from "./pages/RecipeDetails";
import ScrollToTop from "./components/ScrollToTop";
import IngredientDetails from "./pages/IngredientDetails";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/:tab"
          element={<TabDetails type="category" />}
        />

        <Route path="/mood" element={<Mood />} />
        <Route path="/mood/:tab" element={<TabDetails type="mood" />} />

        <Route path="/time" element={<Time />} />
        <Route path="/time/:tab" element={<TabDetails type="time" />} />

        <Route path="/recipe/:recipe" element={<RecipeDetails />} />
        <Route path="/ingredient/:ingredient" element={<IngredientDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
