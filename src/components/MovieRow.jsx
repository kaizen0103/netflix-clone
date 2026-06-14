import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies, onMovieClick }) => {
  return (
    <section className="px-10 py-6">
      <h2 className="text-white text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex gap-8 overflow-x-auto scrollbar-hide py-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={onMovieClick}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;