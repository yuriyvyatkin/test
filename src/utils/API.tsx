import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
  },
});

export default API;
