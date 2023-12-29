import "./App.css";

// Routers
import { Routes, Route } from "react-router-dom";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from "./components/Pages/HomePage";
import MoviePage from "./components/Pages/MoviePage";
import PlayPage from "./components/Pages/PlayPage";
import MovieProvider from "./components/context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/plays" element={<PlayPage />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
