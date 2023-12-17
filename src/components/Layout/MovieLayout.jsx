import React from "react";
import MovieNavNar from "../NavBar/MovieNavBar";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavNar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayout;
