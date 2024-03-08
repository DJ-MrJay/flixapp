import { API_KEY } from "@env";

export default [
  {
    id: "0",
    name: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: "1",
    name: "Action",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },

  {
    id: "2",
    name: "Comedy",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: "3",
    name: "Horror",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: "4",
    name: "Romance",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  {
    id: "5",
    name: "Netflix Orginals",
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
];
