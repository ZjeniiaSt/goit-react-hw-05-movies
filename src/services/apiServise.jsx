import axios from 'axios';

const API_KEY = '07518c21ec464688cc3129545b5c13db';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/day?`);
  return response.data.results;
}

async function getMovieDetails(id) {
  const respons = await axios.get(`movie/${id}&language=en-US`);
  return respons.data;
}

async function getCast(id) {
  const respons = await axios.get(`movie/${id}/credits?&language=en-US`);
  return respons.data.cast;
}

async function getReviews(id) {
  const respons = await axios.get(`movie/${id}/reviews?&language=en-US`);
  return respons.data.results;
}

async function getByQuery(query) {
  const respons = await axios.get(
    `search/movie?&language=en-US&page=1&include_adult=false&query=${query}`,
  );
  return respons.data.results;
}

export { getTrendingMovies, getMovieDetails, getCast, getReviews, getByQuery };
