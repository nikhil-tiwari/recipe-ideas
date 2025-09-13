# Recipe Ideas

A modern, responsive web application to explore and discover recipes by category, mood, time-of-day, or ingredients you already have. Built with React, Vite, Tailwind CSS, and TheMealDB API.

## Live Demo

View the live application here: [Live Link](https://recipe-ideas-pi.vercel.app/)

Deployed on Vercel for fast global delivery and great DX.

## Features

- Ingredient-based search: Type an ingredient (e.g., "chicken", "tomato") to find matching recipes.
- Browse by category: Explore curated categories such as Beef, Chicken, Seafood, Vegan, Dessert, and more.
- Mood-based discovery: Pick a mood like "Comfort-Food" or "Healthy" and get suitable categories/recipes.
- Time-based suggestions: Find recipes by mealtime or occasion (Breakfast, Lunch-or-Dinner, Snack-or-Light-Meal, Dessert).
- Detailed recipe pages: Ingredients, step-by-step instructions, and a link to watch on YouTube when available.
- Smooth navigation: Client-side routing with React Router and automatic scroll-to-top on route change.
- Responsive UI: Mobile-first layout with a compact header and hamburger menu; works great on phones and desktops.
- Fast and lightweight: Vite build tooling and Tailwind CSS utilities.

## Screens & Navigation

- `/` Landing page: Hero, image carousel, ingredient search, and quick access sections for Category, Mood, and Time.
- `/categories` and `/categories/:tab`: List all categories and show recipes within a selected category.
- `/mood` and `/mood/:tab`: Pick a mood and view aggregated recipes across mapped categories.
- `/time` and `/time/:tab`: Choose a time group and explore suitable categories/recipes.
- `/ingredient/:ingredient`: Recipes filtered by the entered ingredient.
- `/recipe/:recipe`: Full recipe details, ingredients, instructions, and optional YouTube link.
- `*` NotFound: Friendly 404 page shown when a route does not exist.

## Tech Stack

- React 19 + Vite 7
- React Router DOM 7
- Tailwind CSS 4 (with @tailwindcss/vite)
- Axios for HTTP requests
- ESLint for code quality

## Data Source

This app uses TheMealDB (free) API:

- Base URL: `https://www.themealdb.com/api/json/v1/1`
- Endpoints used (see `src/services/api.js`):
  - `list.php?c=list` — fetch all categories
  - `filter.php?c=<category>` — meals by category
  - `filter.php?i=<ingredient>` — meals by ingredient
  - `search.php?s=<name>` — search meal by name (for details)

## Local Development

1. Clone the repository

```powershell
git clone https://github.com/nikhil-tiwari/recipe-ideas.git
cd recipe-ideas
```

1. Install dependencies

```powershell
npm install
```

1. Run the development server

```powershell
npm run dev
```

Vite will print a local URL (e.g., [http://localhost:5173](http://localhost:5173)). Open it in your browser.

## Build & Preview

```powershell
npm run build
npm run preview
```

## Project Structure

```text
recipe-ideas/
  public/
  src/
    assets/                # Images (logo, background, carousel pics)
    components/            # Reusable UI: Header, Footer, Loader, MealGrid, InfoSection, ScrollToTop
    constants/             # Mapped mood/time groups
    pages/                 # Route pages (LandingPage, Categories, Mood, Time, TabDetails, RecipeDetails, IngredientDetails)
    services/              # API layer (TheMealDB)
    App.jsx                # Routes and layout
    main.jsx               # App bootstrap
    index.css              # Tailwind and global styles
```

## Usage Tips

- On the landing page, use the big search bar to jump directly to ingredient results.
- Explore Categories, Mood, or Time tabs from the header or landing sections to browse curated lists.
- On recipe detail pages, scroll for ingredients and step-by-step instructions; follow the YouTube link when available.

## Roadmap / Ideas

- Favorites and saved recipes (local storage or backend)
- Pagination and infinite scroll on grids
- Improved error and empty states
- Unit tests for components and API layer

## Acknowledgements

- Data: TheMealDB — [themealdb.com](https://www.themealdb.com/)
- Deployment: Vercel — [vercel.com](https://vercel.com/)

## Contact

For questions or feedback, reach out at: [nikhiltiwarig99@gmail.com](mailto:nikhiltiwarig99@gmail.com)

