import React, { useState, useEffect } from "react";
import axios from "axios";

// Layout HOC(High Order Component)
import DefaultLayout from "../Layout/DefaultLayout";

// component
import HeroCarouselComponent from "../HeroCarousel/HeroCarouselComponent";
import PosterSliderComponent from "./../PosterSlider/PosterSliderComponent";
import EntertainmentCardComponent from "./../Entertainment/EntertainmentCardComponent";

const HomePage = () => {
  const [recomendedMovies, setRecomendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34737309e2b3d93af063d368b9277898"
      );
      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=34737309e2b3d93af063d368b9277898"
      );
      setRecomendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=34737309e2b3d93af063d368b9277898"
      );
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarouselComponent />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
          title="Recommended Movies"
          subtitle="List of recommonded movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSliderComponent
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
