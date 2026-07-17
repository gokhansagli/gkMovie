import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function MovieCard({ movie, addFav, removeFav, favoriMovies }) {
  const { id, original_title, overview, poster_path, vote_average } = movie;

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col space-y-4 group">
      <div className="filmImage relative overflow-hidden ">
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            title={original_title}
            className="w-full h-72 object-cover rounded-lg group-hover:scale-110 transition duration-300"
          />
        </Link>
        <div className="absolute top-2 right-2">
          <span className="text-2xl text-slate-100 cursor-pointer">
            {favoriMovies.includes(id) ? (
              <BsHeartFill
                className="text-red-600"
                onClick={() => {
                  return removeFav(id);
                }}
              />
            ) : (
              <BsHeart
                onClick={() => {
                  return addFav(id);
                }}
              />
            )}
          </span>
        </div>
      </div>
      <div className="filmTitle">
        <Link to={`/movie/${id}`}>
          <h2 className="text-slate-300 text-2xl font-semibold tracking-wide line-clamp-1">
            {original_title}
          </h2>
        </Link>
      </div>
      <div className="filmDescription">
        <p className="text-slate-400 min-h-[96px] line-clamp-4">
          {overview == null || overview == ""
            ? "Açıklama bulunamadı."
            : overview}
        </p>
      </div>
      <div className="flex justify-between items-center mt-3 mb-3">
        <div>
          <span className="text-slate-400">
            Rating: {vote_average?.toFixed(1)}
          </span>
        </div>
        <Link to={`/movie/${id}`}>
          <button className="bg-slate-300 px-4 py-2 rounded-lg cursor-pointer group-hover:bg-gray-600 group-hover:text-slate-50 transition duration-300">
            Film Detay
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
