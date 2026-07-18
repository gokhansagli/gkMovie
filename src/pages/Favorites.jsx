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
        {favoriMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <p className="text-slate-400 text-2xl font-medium text-center">
              Henüz favori filminiz bulunmuyor.
            </p>
            <p className="text-slate-500 text-md text-center">
              Keşfet sayfasına gidip beğendiğiniz filmleri kalbe tıklayarak
              ekleyebilirsiniz!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {favoriMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
