const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => onMovieClick(movie)}
      className="min-w-[220px] cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg object-cover w-[220px] h-[330px]"
      />

      <h3 className="text-white mt-2">
        {movie.title}
      </h3>
    </div>
  );
};

export default MovieCard;