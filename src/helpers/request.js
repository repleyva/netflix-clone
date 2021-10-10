const API_KEY = "07980a595478a628e6b6c3e717529a05";
const BASE = "https://api.themoviedb.org/3/";
const discover = `discover/movie?api_key=${API_KEY}&with_genres=`;
//endpoints
const requests = {
  fetchTrending: `${BASE}trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE}discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE}movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE}${discover}28`,
  fecthComedyMovies: `${BASE}${discover}35`,
  fecthHorrorMovies: `${BASE}${discover}27`,
  fecthRomanceMovies: `${BASE}${discover}10749`,
  fecthDocumentaries: `${BASE}${discover}99`,
};

export default requests;