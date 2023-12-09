import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// tailwind things need to import which we download as dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/movie/:id" />
      <Route path="/plays" />
    </Routes>
  );
}

export default App;
