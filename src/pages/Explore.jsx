import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { getFindMovie, getPopularMovies } from "../api/movieApi";
import useDebounce from "../hooks/debounce";
function Explore({ addFav, removeFav, favoriMovies }) {
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesData, setMoviesData] = useState({});

  const debounce = useDebounce(searchKey, 300);

  useEffect(() => {
    if (debounce === "") {
      getPopularMovies(currentPage).then((response) => setMoviesData(response));
    } else {
      getFindMovie(debounce, currentPage).then((response) =>
        setMoviesData(response),
      );
    }
  }, [debounce, currentPage]);

  let startPage;
  let endPage;
  const visiblePages = 5;
  const sideCount = Math.floor(visiblePages / 2);
  const total_pages = moviesData?.total_pages || 0;

  if (total_pages >= visiblePages) {
    startPage = currentPage - sideCount;
    endPage = currentPage + sideCount;

    if (startPage < 1) {
      startPage = 1;
      endPage = visiblePages;
    }

    if (endPage > total_pages) {
      endPage = total_pages;
      startPage = total_pages - visiblePages + 1;
    }
  } else {
    startPage = 1;
    endPage = total_pages;
  }

  let pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

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
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {moviesData?.results?.map((movie) => {
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
            <ul className="flex gap-3 items-center justify-center text-center flex-wrap">
              <li>
                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="w-20 h-10  rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Geri
                </button>
              </li>

              {pages.map((page) => {
                return (
                  <li key={page}>
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={
                        currentPage !== page
                          ? "w-10 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white"
                          : "w-10 h-10 rounded-full bg-red-900 border border-gray-300 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white"
                      }
                    >
                      {page}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  disabled={currentPage === total_pages || total_pages === 0}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, total_pages))
                  }
                  className="w-20 h-10 rounded-full bg-gray-950 border border-red-500 hover:bg-red-900 hover:border-gray-300 text-white p-2 block cursor-pointer hover:bg-gray-600 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
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
