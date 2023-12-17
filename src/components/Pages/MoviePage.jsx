import React from "react";
import MovieNavBar from "../NavBar/MovieNavBar";
import MovieLayout from "../Layout/MovieLayout";

const MoviePage = () => {
  return (
    <>
      <MovieNavBar />
      Movie Page
      <div>Footer</div>
    </>
  );
};

export default MovieLayout(MoviePage);
