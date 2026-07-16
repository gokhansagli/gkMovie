import Navbar from "../components/Navbar";
import MovieSlider from "../components/MovieSlider";
function Home({
  nowPlayingMovies,
  popularMovies,
  upComingMovies,
  topRatedMovies,
  addFav,
  removeFav,
  favoriMovies,
}) {
  return (
    <>
      <Navbar />
      <MovieSlider
        title="Vizyondakiler"
        movies={nowPlayingMovies}
        addFav={addFav}
        removeFav={removeFav}
        favoriMovies={favoriMovies}
      />
      <MovieSlider
        title="Yaklaşan Filmler"
        movies={upComingMovies}
        addFav={addFav}
        removeFav={removeFav}
        favoriMovies={favoriMovies}
      />
      <MovieSlider
        title="Popüler Filmler"
        movies={popularMovies}
        addFav={addFav}
        removeFav={removeFav}
        favoriMovies={favoriMovies}
      />
      <MovieSlider
        title="En Sevilen Filmler"
        movies={topRatedMovies}
        addFav={addFav}
        removeFav={removeFav}
        favoriMovies={favoriMovies}
      />
    </>
  );
}

export default Home;
