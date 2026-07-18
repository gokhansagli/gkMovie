import { useState } from "react";
import { FavoriteMoviesContext } from "../context/FavoriteContext";

function FavoriteProvider({ children }) {
  const [favoriMovies, setFavoriMovies] = useState(() => {
    const localData = localStorage.getItem("favoriMovies");
    return localData ? JSON.parse(localData) : [];
  });

  function addFav(id, title, overview, vote_average, poster_path) {
    const newList = [
      ...favoriMovies,
      { id, title, overview, vote_average, poster_path },
    ];
    localStorage.setItem("favoriMovies", JSON.stringify(newList));
    setFavoriMovies(newList);
  }

  function removeFav(id) {
    const newList = favoriMovies.filter((movie) => movie.id !== id);

    localStorage.setItem("favoriMovies", JSON.stringify(newList));

    setFavoriMovies(newList);
  }

  function isFavorite(id) {
    return favoriMovies.some((movie) => movie.id === id);
  }

  return (
    <FavoriteMoviesContext.Provider
      value={{ favoriMovies, addFav, removeFav, isFavorite }}
    >
      {children}
    </FavoriteMoviesContext.Provider>
  );
}

export default FavoriteProvider;
