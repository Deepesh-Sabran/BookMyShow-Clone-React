import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import PaymentModal from "../payment/PaymentModal";
import { PiCurrencyInrBold } from "react-icons/pi";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres
    ?.map(({ name }) => {
      return name;
    })
    .join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />;
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>4.4k rating</h4>
          <h4>Kannada, English, Hindi, Telgu, Tamil</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button
            onClick={rentMovie}
            className="bg-red-500  py-3 text-white font-semibold rounded-lg flex"
          >
            Rent <PiCurrencyInrBold className="mt-1.5" /> 149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-500  py-3 text-white font-semibold rounded-lg flex"
          >
            Buy <PiCurrencyInrBold className="mt-1.5" /> 999
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
