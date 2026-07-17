import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { getFindMovie, getPopularMovies } from "../api/movieApi";
import useDebounce from "../hooks/debounce";
function Explore({ addFav, removeFav, favoriMovies }) {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);

  const debounce = useDebounce(searchKey, 500);

  useEffect(() => {
    if (debounce == "") {
      getPopularMovies(currentPage).then((response) =>
        setPopularMovies(response.results),
      );
    } else {
      getFindMovie(debounce, currentPage).then((response) =>
        setPopularMovies(response.results),
      );
    }
  }, [debounce, currentPage]);

  console.log(currentPage);
  console.log(popularMovies);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto m-8 py-4 md:py-6 lg:py-8 px-4 xl:px-0">
        <div className="flex justify-center items-center mb-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
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
        <div>
          <div className="my-12 flex justify-end">
            <ul className="flex gap-3 items-center justify-center text-center ">
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="w-20 h-10  rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white"
                >
                  Geri
                </button>
              </li>
              <li>
                <button className="w-10 h-10  rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white">
                  1
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white">
                  2
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white">
                  3
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white">
                  4
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white">
                  5
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="w-20 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white"
                >
                  İleri
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
