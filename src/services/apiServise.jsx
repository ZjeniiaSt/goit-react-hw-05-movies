import axios from 'axios';

const API_KEY = '07518c21ec464688cc3129545b5c13db';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/day?`);
  return response.data.results;
}

async function getMovieDetails(id) {
  const respons = await axios.get(`movie/${id}`);
  return respons.data;
}

export { getTrendingMovies, getMovieDetails };
