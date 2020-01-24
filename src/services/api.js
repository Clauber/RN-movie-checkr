import axios from 'axios';
import {MOVIEDB_API_KEY} from 'react-native-dotenv';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

api.interceptors.request.use(config => {
  config.params = {api_key: MOVIEDB_API_KEY};
  return config;
});

export default api;
