import { useContext } from "react";
import Navbar from "../components/Navbar";
import { FavoriteMoviesContext } from "../context/FavoriteContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favoriMovies } = useContext(FavoriteMoviesContext);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto m-8 py-4 md:py-6 lg:py-8 px-4 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {favoriMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Favorites;
