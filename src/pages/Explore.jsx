import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
function Explore({ addFav, removeFav, popularMovies, favoriMovies }) {
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto m-8 py-4 md:py-6 lg:py-8 px-4 xl:px-0">
        <div className="flex justify-center items-center mb-8">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Film Ara"
            className="bg-white rounded-sm p-2 max-w-3xl w-full outline-none"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {popularMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                addFav={addFav}
                removeFav={removeFav}
                movie={movie}
                favoriMovies={favoriMovies}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Explore;
