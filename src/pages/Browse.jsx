import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/tmdb";
import MovieRow from "../components/MovieRow";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) {
    return (
      <h1 className="text-white text-center mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <MovieRow
        title="Trending Movies"
        movies={movies}
      />
    </div>
  );
};

export default Browse;