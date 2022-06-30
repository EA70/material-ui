// 

//

const API_KEY = "acadce2268a0e1bcdd56b5e18e06c4ce";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    test : `https://api.themoviedb.org/3/movie/550?api_key=acadce2268a0e1bcdd56b5e18e06c4ce`,
    fetchTrending : `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&languahe=en-US`,
    fetchActionMovies : `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
}

export default requests ;

//https://api.themoviedb.org/3/trending/all/week?api_key=acadce2268a0e1bcdd56b5e18e06c4ce