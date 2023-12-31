import React from "react";
import MovieNavBar from "../NavBar/MovieNavBar";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavBar />
        <Component {...props} />
      </div>
    );
  };

export default MovieLayout;
