import { useEffect, useState } from "react";
import { fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies } from "../services/tmdb";
import MovieRow from "../components/MovieRow";
import HeroMovieBanner from "../components/HeroMovieBanner";
import MovieModal from "../components/MovieModal";
import Logo from "../components/Logo";

const Browse = () => {
  
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const[trending, popular, topRated] = await Promise.all([fetchPopularMovies(),
          fetchTrendingMovies(),
          fetchTopRatedMovies(),
        ]);

        setPopularMovies(popular);
        setTrendingMovies(trending);
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

      {showModal && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setShowModal(false)}
        />
      )}

      <MovieRow
        title="Trending Movies"
        movies={trendingMovies}
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
        movies={popularMovies}
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
        movies={topRatedMovies}
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