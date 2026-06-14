const MovieCard = ({movie,onMovieClick }) => {
  return (
    <div
  onClick={() => onMovieClick(movie)}
  className="
    min-w-55
    rounded
    cursor-pointer
    transition-all
    duration-300
    hover:scale-110
    
  "
>
  <img
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt={movie.title}
/>
<h3>{movie.title}</h3>
</div>
  );
};
export default MovieCard;