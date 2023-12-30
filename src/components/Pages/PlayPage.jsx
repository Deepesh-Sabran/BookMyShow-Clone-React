import { useEffect, useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
// import PosterComponent from "../Poster/PosterComponent";
import PlayFilterComponent from "../Playfilter/PlayFilterComponent";
import PosterSliderComponent from "../PosterSlider/PosterSliderComponent";
import axios from "axios";

// importing components

const PlayPage = (props) => {
  const [popularPlays, setPopularPlays] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const reqPopularPlays = async () => {
      const getPoplarPlays = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=34737309e2b3d93af063d368b9277898"
      );
      setPopularPlays(getPoplarPlays.data.results);
    };
    reqPopularPlays();
  });

  useEffect(() => {
    const reqTopRated = async () => {
      const getTopRated = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=34737309e2b3d93af063d368b9277898"
      );
      setTopRated(getTopRated.data.results);
    };
    reqTopRated();
  });
  return (
    <>
      <div className="container px-auto my-10 mx-auto flex gap-2">
        <div className="lg:w-2/4 p-4 bg-white">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilterComponent
              title="Date"
              tags={["Today", "Tomorrow", "Upcoming"]}
            />
            <PlayFilterComponent
              title="Language"
              tags={["English", "Hindi", "Kanada"]}
            />
            <PlayFilterComponent
              title="Catagorie"
              tags={["Theater", "Storytelling", "Experimental"]}
            />
            <PlayFilterComponent
              title="Genres"
              tags={[
                "Drama",
                "Comedy",
                "Horror",
                "Thriller",
                "Adult",
                "War",
                "Tribute",
                "Fantasy",
                "Suspense",
                "Tragedy",
                "Adventure",
              ]}
            />
          </div>
        </div>
        <div className="w-9/12">
          <div className="container mx-auto px-4 md:px-12 my-3">
            <PosterSliderComponent
              title="Popular Plays"
              posters={popularPlays}
              isDark={false}
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-10">
            <PosterSliderComponent
              title="Top Rated Plays"
              posters={topRated}
              isDark={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(PlayPage);
