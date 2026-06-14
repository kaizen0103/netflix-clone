const MovieCard = ({ title, image }) => {
  return (
    <div className="min-w-55 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10">
      <img
        src={image}
        alt={title}
        className="rounded-lg object-cover w-[220px] h-[330px]"
      />

      <h3 className="text-white mt-2">
        {title}
      </h3>
    </div>
  );
};
export default MovieCard;