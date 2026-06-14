import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/tmdb";
import MovieRow from "../components/MovieRow";
import HeroMovieBanner from "../components/HeroMovieBanner";
import MovieModal from "../components/MovieModal";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();

        setMovies(data);

        // Set first movie as hero banner
        if (data.length > 0) {
          setSelectedMovie(data[0]);
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
        movies={movies}
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