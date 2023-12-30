import React, { useContext, useEffect, useState } from "react";
import MovieLayout from "../Layout/MovieLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";
import MovieHero from "../movieHero/MovieHero";
import PosterSliderComponent from "../PosterSlider/PosterSliderComponent";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Cast from "../cast/CastComponent";

const MoviePage = () => {
  // inbuit method of React "useParams"
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recomendedMovies, setRecomendedMovies] = useState([]);

  // useEffect for cast
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=34737309e2b3d93af063d368b9277898`
      );
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  // useEffect for similarMovies
  useEffect(() => {
    const requestSmilarMovies = async () => {
      const getSimilarMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=34737309e2b3d93af063d368b9277898`
      );
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSmilarMovies();
  }, [id]);

  // useEffect for recomendedMovies
  useEffect(() => {
    const requestRecomendedMovies = async () => {
      const getRecomendedMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=34737309e2b3d93af063d368b9277898`
      );
      setRecomendedMovies(getRecomendedMovies.data.results);
    };
    requestRecomendedMovies();
  }, [id]);

  // useEffect for setMovies
  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=34737309e2b3d93af063d368b9277898`
      );
      setMovie(getMovie.data);
    };
    requestMovie();
  }, [id, setMovie]);

  const settingsCast = {
    infinite: false,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 3,
    intialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    infinite: false,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 3,
    intialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 7,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3 lg:ml-40">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="h-px my-8 bg-gray-300 border-0 lg:ml-40">
          <hr />
        </div>

        <div className="my-8 lg:ml-40">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px my-8 bg-gray-300 border-0 lg:ml-40">
          <hr />
        </div>

        {/* Recommended Sliders */}
        <div className="my-8 lg:ml-40">
          <PosterSliderComponent
            config={settings}
            title="Recommended Movies"
            posters={recomendedMovies}
            isDark={false}
          />
        </div>

        <div className="h-px my-8 bg-gray-300 border-0 lg:ml-40">
          <hr />
        </div>

        {/* Cast Slider */}
        <div className="my-8 lg:ml-40">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...settingsCast}>
            {cast.map((castData, index) => (
              <Cast
                image={castData.profile_path}
                castName={movie.original_name}
                role={movie.character}
                key={index}
              />
            ))}
          </Slider>
        </div>

        <div className="h-px my-8 bg-gray-300 border-0 lg:ml-40">
          <hr />
        </div>

        <div className="my-8 lg:ml-40">
          <PosterSliderComponent
            config={settings}
            title="BMS XCLUSIVE Movies"
            posters={similarMovies}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MovieLayout(MoviePage);
