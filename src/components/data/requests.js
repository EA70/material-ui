// 

//https://api.themoviedb.org/3/movie/550?api_key=acadce2268a0e1bcdd56b5e18e06c4ce

const API_KEY = "acadce2268a0e1bcdd56b5e18e06c4ce";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending : `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
}

export default requests ;