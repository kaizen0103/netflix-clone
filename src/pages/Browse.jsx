import { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies } from "../services/tmdb";
import MovieRow from "../components/MovieRow";
import HeroMovieBanner from "../components/HeroMovieBanner";
import MovieModal from "../components/MovieModal";
import Logo from "../components/Logo";

const Browse = () => {
  
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const[trending, popular, topRated] = await Promise.all([fetchTrendingMovies(),
          fetchPopularMovies(),
          fetchTopRatedMovies(),
        ]);

        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);

        
        if (trending.length > 0) {
          setSelectedMovie(trending[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  const filteredTrendingMovies = trendingMovies.filter((movie) =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredPopularMovies = popularMovies.filter((movie) =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredTopRatedMovies = topRatedMovies.filter((movie) =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  if (loading || !selectedMovie) {
    return (
      <h1 className="text-white text-center mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="bg-black min-h-screen">
       <div className='absolute top-4 left-4 z-50 '>
        <Logo/>
        </div>
      
      <HeroMovieBanner
        movie={selectedMovie}
        onMoreInfo={() => setShowModal(true)}
      />

      <div className="px-10 py-6">
      <input
         type="text"
         placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
          w-full
          max-w-md
          px-4
          py-3
          rounded-lg
          bg-zinc-800
          text-white
          border
          border-zinc-700
          outline-none
          focus:border-red-600
          "
          />
          </div>
          {searchTerm &&
              filteredTrendingMovies.length === 0 &&
              filteredPopularMovies.length === 0 &&
              filteredTopRatedMovies.length === 0 && (
                <p className="text-white mt-4 pl-10">
                  No movies found.
                </p>
)}

      {showModal && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setShowModal(false)}
        />
      )}

      <MovieRow
        title="Trending Movies"
        movies={filteredTrendingMovies}
        onMovieClick={(movie) => {
          setSelectedMovie(movie);

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />

       <MovieRow
        title="Popular"
        movies={filteredPopularMovies}
        onMovieClick={(movie) => {
          setSelectedMovie(movie);

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />

       <MovieRow
        title="Top Rated"
        movies={filteredTopRatedMovies}
        onMovieClick={(movie) => {
          setSelectedMovie(movie);

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </div>
  );
};

export default Browse;