import { createContext } from "react";

export const FavoriteMoviesContext = createContext({
  favoriMovies: [],
  addFav: () => {},
  removeFav: () => {},
  isFavorite: () => {},
});
