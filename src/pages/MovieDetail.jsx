import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getMovie, getMovieCredits, getMovieVideo } from "../api/movieApi";
import Rating from "../components/Rating";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "../img/avatar.webp";
import { FaFilm } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";

function MovieDetail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [movieDataActors, setMovieDataActors] = useState(null);
  const [movieVideo, setMovieVideo] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getMovie(id).then((response) => {
      setMovieData(response);
    });

    getMovieCredits(id).then((response) => {
      setMovieDataActors(response);
    });

    getMovieVideo(id).then((response) => {
      setMovieVideo(response);
    });
  }, [id]);

  if (!movieData || !movieDataActors || !movieVideo) {
    return <p>Yükleniyor</p>;
  }

  const trailer = movieVideo?.results?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer",
  );

  const { title, overview, vote_average, genres, poster_path, backdrop_path } =
    movieData;

  return (
    <>
      <Navbar />

      <div
        className="relative min-h-screen w-full bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className=" bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent">
          <div className="max-w-7xl mx-auto relative z-10 py-24 px-4">
            <div className="flex gap-16 flex-col md:flex-row md:gap-8">
              <div className="min-w-3xs">
                <img
                  className="rounded-lg w-full border-2 border-gray-400"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
              </div>
              <div className="flex flex-col gap-y-6">
                <h2 className="text-slate-200 text-5xl font-semibold tracking-wide">
                  {title}
                </h2>
                <div className="flex gap-3">
                  {genres.map((gen) => {
                    return (
                      <span
                        key={gen.id}
                        className="text-gray-900 font-semibold text-sm bg-slate-300 rounded-xl px-2 py-1 tracking-wide"
                      >
                        {gen.name}
                      </span>
                    );
                  })}

                  <span></span>
                </div>

                <Rating vote_average={vote_average} />

                <div>
                  <p className="text-slate-200 text-2xl">{overview}</p>
                </div>
                <div>
                  <div>
                    <button
                      className="text-red-500 bg-amber-100 font-bold tracking-wide px-4 py-2 rounded-sm cursor-pointer flex items-center justify-center"
                      onClick={() => setOpen(true)}
                    >
                      <FaFilm className="mr-2 relative top-[1px]" /> Fragmanı
                      İzle
                    </button>

                    <Dialog.Root open={open} onOpenChange={setOpen}>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40" />

                        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black p-2 z-50">
                          <Dialog.Close asChild>
                            <button className="absolute right-3 top-3 text-white text-2xl">
                              ✕
                            </button>
                          </Dialog.Close>
                          {trailer ? (
                            <iframe
                              className="aspect-video w-full rounded"
                              src={`https://www.youtube.com/embed/${trailer.key}`}
                              allowFullScreen
                            />
                          ) : (
                            <p className="text-white h-16 p-4">
                              Fragman bulunamadı.
                            </p>
                          )}
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-24 ">
              <div className="text-slate-200 text-5xl font-semibold tracking-wide mb-10">
                Oyuncular
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                {movieDataActors.cast.map((actor) => {
                  return (
                    <SwiperSlide key={actor.id}>
                      <div className="flex flex-col bg-gray-800 rounded-xl ">
                        <div className="w-full h-64 overflow-hidden">
                          <img
                            className="w-full rounded-t-lg "
                            src={
                              actor.profile_path
                                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                                : Avatar
                            }
                            alt={actor.name}
                          />
                        </div>
                        <div className="my-3 px-3">
                          <h4 className="text-white text-2xl">{actor.name}</h4>
                          <p className="text-white text-sm">
                            {actor.character}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
