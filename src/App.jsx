import { useEffect, useState } from "react";
import "./App.css";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getUpComingMovies,
  getTopRatedMovies,
} from "./api/movieApi";

import "swiper/css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favorites from "./pages/Favorites";
import WatchList from "./pages/WatchList";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [favoriMovies, setFavoriMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((response) => {
      setNowPlayingMovies(response.results);
    });

    getPopularMovies().then((response) => {
      setPopularMovies(response.results);
    });
    getUpComingMovies().then((response) => {
      setUpComingMovies(response.results);
    });
    getTopRatedMovies().then((response) => {
      setTopRatedMovies(response.results);
    });
  }, []);

  function addFav(id) {
    setFavoriMovies((favoriMovies) => {
      return [...favoriMovies, id];
    });
  }

  function removeFav(id) {
    setFavoriMovies((favoriMovies) => {
      const yeniList = favoriMovies.filter((favoriMovie) => {
        if (favoriMovie !== id) {
          return true;
        } else {
          return false;
        }
      });
      return yeniList;
    });
  }

  if (!nowPlayingMovies) {
    return <p>Yükleniyor..</p>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              nowPlayingMovies={nowPlayingMovies}
              popularMovies={popularMovies}
              upComingMovies={upComingMovies}
              topRatedMovies={topRatedMovies}
              addFav={addFav}
              removeFav={removeFav}
              favoriMovies={favoriMovies}
            />
          }
        ></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route
          path="*"
          element={
            <Home
              nowPlayingMovies={nowPlayingMovies}
              popularMovies={popularMovies}
              upComingMovies={upComingMovies}
              topRatedMovies={topRatedMovies}
              addFav={addFav}
              removeFav={removeFav}
              favoriMovies={favoriMovies}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
