import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

function MovieSlider({ title, movies, addFav, removeFav, favoriMovies }) {
  return (
    <div className="max-w-7xl mx-auto m-8 py-4 md:py-6 lg:py-8 px-4 xl:px-0">
      <div>
        <h2 className="text-4xl text-white mb-6">{title}</h2>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieCard
                addFav={addFav}
                removeFav={removeFav}
                movie={movie}
                favoriMovies={favoriMovies}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieSlider;
