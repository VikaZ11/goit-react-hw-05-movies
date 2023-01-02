import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = 'f39ff6961706954b4bce0deacf0d5670';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
const lang = 'en-US';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchMovies = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieReview = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data.results;
}