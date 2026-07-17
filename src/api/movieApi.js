import axios from "axios";

const API_URL = "https://api.themoviedb.org/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${API_KEY}`,
};

async function getNowPlayingMovies() {
  try {
    const response = await axios.get(
      `${API_URL}3/movie/now_playing?language=tr-TR`,
      {
        headers: API_HEADERS,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getPopularMovies(currentPage = 1) {
  try {
    const response = await axios.get(
      `${API_URL}3/movie/popular?page=${currentPage}&language=tr-TR`,
      {
        headers: API_HEADERS,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getTopRatedMovies() {
  try {
    const response = await axios.get(
      `${API_URL}3/movie/top_rated?language=tr-TR`,
      {
        headers: API_HEADERS,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUpComingMovies() {
  try {
    const response = await axios.get(
      `${API_URL}3/movie/upcoming?language=tr-TR`,
      {
        headers: API_HEADERS,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovie(id) {
  try {
    const response = await axios.get(`${API_URL}3/movie/${id}?language=tr-TR`, {
      headers: API_HEADERS,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieCredits(id) {
  try {
    const response = await axios.get(
      `${API_URL}3/movie/${id}/credits?language=tr-TR`,
      {
        headers: API_HEADERS,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieVideo(id) {
  try {
    const response = await axios.get(
      `${API_URL}3/movie/${id}/videos?language=tr-TR`,
      {
        headers: API_HEADERS,
      },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getFindMovie(query, currentPage) {
  try {
    const response = await axios.get(
      `${API_URL}3/search/movie?query=${query}&page=${currentPage}&language=tr-TR`,
      { headers: API_HEADERS },
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  getNowPlayingMovies,
  getUpComingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getMovie,
  getMovieCredits,
  getMovieVideo,
  getFindMovie,
};
