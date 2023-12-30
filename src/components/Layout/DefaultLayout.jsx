import React from "react";
import Navbar from "../NavBar/NavBar";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    );
  };

export default DefaultLayout;
